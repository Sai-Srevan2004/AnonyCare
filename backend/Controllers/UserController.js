const User = require("../Models/UserModel")
const Otp = require("../Models/OtpModel")
const otpGenerator = require("otp-generator")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

//otp send function

const sendOtp = async (req, res) => {


    try {
        //fetch email from req.body
        const { email } = req.body
        //check if email is not empty
        if (!email) {
            return res.json({
                success: false,
                message: "Email is required!"
            })
        }

        //check if user already exists
        const checkUserPresent = await User.findOne({ email })

        //if user already exists then return res
        if (checkUserPresent) {
            return res.json({
                success: false,
                message: "User already exists!"
            })
        }

        //generate Otp
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        })

        //const unique otp or not
        var result = await Otp.findOne({ otp: otp })

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            }
            )
            result = await Otp.findOne({ otp: otp })
        }


        const otpPayload = {
            otp: otp,
            email: email
        }

        //create entry in db of otp

        const OtpBody = await Otp.create(otpPayload)

        console.log(OtpBody)


        //send response

        return res.json({
            success: true,
            message: "Otp sent Successfully!"
        })
    } catch (error) {
         console.log(error.message)
        return res.json({
            success: false,
            message: "somethng wrong while sending Otp!"
        })
    }
}


//sign up
const signUp = async (req, res) => {
    try {
        // Fetch data from req.body
        const {email, password, cpassword ,otp } = req.body;
       
        console.log("all:", email, password, cpassword, otp);
        
        // Validate data
        if ( !email || !password || !cpassword || !otp) {
            return res.json({
                success: false,
                message: "All fields are required!"
            });
        }

        // Check if passwords match
        if (password !== cpassword) {
            return res.json({
                success: false,
                message: "Password and confirm password do not match!"
            });
        }

        // Find most recent OTP from the database
        const recentOtp = await Otp.findOne({ email }).sort({ createdAt: -1 }).limit(1);
        
        // Validate OTP
        if (!recentOtp) {
            return res.json({
                success: false,
                message: "OTP not found!"
            });
        }

        if (otp !== recentOtp.otp) {
            console.log("otp:", otp);
            console.log("recentOtp:", recentOtp.otp);
            return res.json({
                success: false,
                message: "Invalid OTP!"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await User.create({
            email,
            password: hashedPassword,
        });

        // Return response
        return res.json({
            success: true,
            message: "User registration successful!",
            data: user
        });

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: "User registration failed! Please try again later."
        });
    }
};


//login

const login = async (req, res) => {
     try {
        //get data from req.body
        const {email,password}=req.body

        //validate
        if(!email || !password)
        {
            return res.json({
                success:false,
                message:"User not exists!"
            })
        }

        //check if user not actually exists but trying to login
        const isExist=await User.findOne({email})

        if(!isExist)
        {
            return res.json({
                success:false,
                message:"User do not exist!"
            })
        }

        //password check
        if(!await bcrypt.compare(password,isExist.password))
            {
                return res.json({
                    success:false,
                    message:"Password do not match!"
                })
            }


        const payLoad={
            email:isExist.email,
            id:isExist._id,
        }

        const token=jwt.sign(payLoad,process.env.JWT_SECRET)
       
        //create cookie
        const options={
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true
        }

        //undeifing password
        isExist.password=undefined

        //if all correct generate jwt token
        return res.cookie("token",token,options).json({
            success:true,
            message:"User Logged In successfully!",
            data:isExist,
            token:token
        })


     } catch (error) {
        console.log(error.message)
        return res.json({
            success:false,
            message:"Login failed! please try Again later!"
        })
     }
}

//get otherusers

const getOtherUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user.id;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        return res.json(otherUsers);
    } catch (error) {
        console.log(error);
    }
}


  

module.exports = { sendOtp, signUp, login,getOtherUsers}