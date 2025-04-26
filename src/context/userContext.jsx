import { useReducer,createContext,useEffect } from "react"

const ininitalState={token:null}
function userReducer(state,action){
     switch(action.type){
        case "LOGIN":
            return {...state,token:action.payload}
        case "LOGOUT":
            return {...state,token:null}
        default:
            return state
     }
}
export const UserContext=createContext()

export const UserContextProvider=({children})=>{
    const [user,userDispatch]=useReducer(userReducer,ininitalState)
    useEffect(()=>{
        const userToken=localStorage.getItem("token")
        if(userToken){
            userDispatch({type:"LOGIN",payload:userToken})
        }

    },[])




   return <UserContext.Provider value={{user,userDispatch}}>
        {children}
    </UserContext.Provider>
}









