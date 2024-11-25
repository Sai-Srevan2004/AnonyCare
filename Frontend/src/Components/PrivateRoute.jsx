// This will prevent non-authenticated users from accessing this route
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import toast from "react-hot-toast"

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth)

  if (token !== null) {
    return children
  } else {
    toast.error("Login please first!")
    return <Navigate to="/" />
  }
}

export default PrivateRoute
