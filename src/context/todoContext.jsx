import { useReducer,createContext,useEffect } from "react"

const ininitalState={
    todos:[]
}

function todoReducer(state,action){
     switch(action.type){
        case "LOAD_TODO":
            return {...state,todos:action.payload}
        case "ADD_TODO":
            return {...state,todos:[action.payload,...state.todos]}
        case "UPDATE_TODO":
            return {...state,todos:state.todos.map(todo=>todo._id==action.payload._id?action.payload:todo)}
        case "DELETE_TODO":
                return {
                    ...state,todos:state.todos.filter(todo=>todo._id!=action.payload._id)
                }
        default:
            return state
     }
}
export const TodoContext=createContext()

export const TodoContextProvider=({children})=>{
    const [todos,todoDispatch]=useReducer(todoReducer,ininitalState)




   return <TodoContext.Provider value={{todos,todoDispatch}}>
        {children}
    </TodoContext.Provider>
}









