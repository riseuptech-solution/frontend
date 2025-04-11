import React,{ useState } from "react";

const UseStateHook=()=>{
const [users,setUsers]=useState("Muhemd")
const addUser=()=>{
    // use spreed operator
    setUsers([...users,"New User"])
}
    return(
    <>
    <div>
        {/* <p>{users.map((user,index)=>(<p key={index}>{user}</p>))}</p> */}
<p>{users}</p>
        <button onClick={addUser}>Add User</button>
    </div>
    </>
    )
}
export default UseStateHook