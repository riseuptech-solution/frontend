import UseUserContext from "../hooks/useUserContext"
import { Navigate } from "react-router-dom"

const ProtectComponent=({children})=>{

    const {user}=UseUserContext()
     return user.token? children:<Navigate  to="/" replace></Navigate>

}

export  default  ProtectComponent