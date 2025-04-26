import React, { useEffect, useState } from 'react';
import Layout from "../Components/Layout";
import "../css/todo.css";
import {api} from "../utils/api"
import UseUserContext from '../hooks/useUserContext';
import UseTodoContext from '../hooks/useTodoContext';
function Todo() {
  // const [todos, setTodos] = useState([]);

  const [error,setError]=useState(null)
  const [success,setSuccess]=useState(null)

  const [titleValue, setTitleValue] = useState(''); // register form data handler
  const [descriptionValue, setDescriptionValue] = useState(''); //
  const [editId, setEditId] = useState(null);

  const [editTitleValue, setEditTitleValue] = useState(''); //edit value handler and state
  const [editDesriptionValue, setEditDescriptionValue] = useState('');

const {todos,todoDispatch}=UseTodoContext()
 
 
  useEffect(()=>{
    async function  fetchTodos(){
      try {
        const response=await api.get("/todo/all")

      todoDispatch({type:"LOAD_TODO",payload:response.data.todos})
        setError(null)
        setSuccess(response.data.message)
      } catch (error) {
        setError(error.response.data.error)
        setSuccess(null)
      }
    }
    fetchTodos()
  },[])
  const addTodo = async(e) => {
    e.preventDefault();
    try {
      const response=await api.post("/todo/create",{
        body:{ title:titleValue,
              description:descriptionValue
            }
      })
     
      setSuccess(response.data.message)
      todoDispatch({type:"ADD_TODO",
        payload:{ _id: response.data.newTodo._id,
                             title:titleValue,
                              description:descriptionValue,}})
        //    title:titleValue,
        //   description:descriptionValue,}})

      //   setTodos([...todos, {
      //   id: response.data.newTodo._id,
      //    title:titleValue,
      //   description:descriptionValue,
      //   completed: false
      // }]);
      setError(null)
      setTitleValue('');
      setDescriptionValue('');
    } catch (error) {
      setError(error.response.data.error)
      setSuccess(null)
    }
    
  };

  const deleteTodo =async(id) => {
    // requ
    try {
      
      const response=await api.delete(`/todo/${id}`)
      // setTodos(todos.filter(todo => todo.id !== id));
      todoDispatch({type:"DELETE_TODO",payload:{_id:id}})
      setSuccess(response.data.message)
      setError(null)
    } catch (error) {
      setError(error.response.data.error)
      setSuccess(null)
    }

  };


  const startEdit = (todo) => {
    setEditId(todo._id);
    setEditTitleValue(todo.title);
    setEditDescriptionValue(todo.description);
  };




  const saveEdit = async(id) => {
      try {
        const resposne=await api.put(`/todo/${id}`,{
          body:{title: editTitleValue,description: editDesriptionValue}
        })

        todoDispatch({type:"UPDATE_TODO",payload:{_id:id, title: editTitleValue,description: editDesriptionValue}})
        setEditId(null);
      } catch (error) {
        console.log(error)
      }

  };



  const cancelEdit = () => {
    setEditId(null);
  };

  return (
    <Layout>
      <div className='todo-main'>
        <h4>My Todo List</h4>
        {error && <div className='error-message'>{error}</div>}
        {success && <div className='success-message'>{success}</div>}
        
        <form onSubmit={addTodo} className="todo-form">
          <div>
          <input
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
            required
          />
          </div>
          <div>
            <input
            type="text"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
            placeholder="Add description task..."
            className="todo-input"
            required
          />
          </div>
          <button type="submit" className="todo-add-btn">
            Add Task
          </button>
        </form>


        <div className="todo-list">
          {todos.todos.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            todos.todos.map(todo => (
              <div 
                key={todo._id} 
                className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {editId === todo._id ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={editTitleValue}
                      onChange={(e) => setEditTitleValue(e.target.value)}
                      className="edit-input"
                      autoFocus
                    />
                     <input
                      type="text"
                      value={editDesriptionValue}
                      onChange={(e) => setEditDescriptionValue(e.target.value)}
                      className="edit-input"
                      autoFocus
                    />
                    <button 
                      type="button" 
                      onClick={() => saveEdit(todo._id)}
                      className="save-btn">
                      Save
                    </button>

                    <button 
                      type="button" 
                      onClick={cancelEdit}
                      className="cancel-btn">
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <div 
                      className="todo-text">
                      {todo.title}
                    </div>
                    <div 
                      className="todo-text"
                     >
                      {todo.description}
                    </div>
                    <div className="todo-actions">
                      <button 
                        onClick={() => startEdit(todo)}
                        className="edit-btn">
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteTodo(todo._id)}
                        className="delete-btn">
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Todo;