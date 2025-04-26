import { TodoContext } from "../context/todoContext";
import { useContext } from "react";

function UseTodoContext(){
     const useTodoContext=useContext(TodoContext)
    return useTodoContext
}

export default UseTodoContext