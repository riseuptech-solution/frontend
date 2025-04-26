import { UserContext } from "../context/userContext";
import { useContext } from "react";

function UseUserContext(){
     const useUserContext=useContext(UserContext)
    return useUserContext
}

export default UseUserContext