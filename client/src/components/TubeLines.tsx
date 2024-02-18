import { Navigate } from "react-router-dom"
import { isLoggedIn } from "../utils/Auth"

const Tubelines = () => {
  if (!isLoggedIn()) return <Navigate to='/login' />
  
  return (
    <div>Tube lines</div>
  )
}

export default Tubelines