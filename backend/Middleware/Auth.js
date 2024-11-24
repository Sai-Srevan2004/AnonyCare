// Importing required modules
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// Configuring dotenv to load environment variables from .env file
dotenv.config();

// This function is used as middleware to authenticate user requests
const auth = async (req, res, next) => {

	console.log(req.header("Authorization"))
	try {
		// Extracting JWT from request cookies, body or header
		
		const token =req.header("Authorization").split(" ")[1];

		// If JWT is missing, return 401 Unauthorized response
		if (!token) {
			return res.json({ success: false, message: `Token Missing` });
		}

		try {
			// Verifying the JWT using the secret key stored in environment variables
			const decode =jwt.verify(token, process.env.JWT_SECRET);
			console.log(decode);
			// Storing the decoded JWT payload in the request object for further use
			req.user = decode;

		} catch (error) {
			// If JWT verification fails, return 401 Unauthorized response
			return res.json({ success: false, message: "token is invalid",error:error.message });
		}

		// If JWT is valid, move on to the next middleware or request handler
		next();
	} catch (error) {
		// If there is an error during the authentication process, return 401 Unauthorized response
		return res.json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
			error:error.message
		});
	}
};


module.exports={auth}