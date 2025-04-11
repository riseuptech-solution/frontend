import React, { useState } from 'react';
import Layout from "../Components/Layout";
import "../css/todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditValue(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, text: editValue} : todo
    ));
    setEditId(null);
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  return (
    <Layout>
      <div className='todo-main'>
        <h4>My Todo List</h4>
        
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
            required
          />
          <button type="submit" className="todo-add-btn">
            Add Task
          </button>
        </form>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            todos.map(todo => (
              <div 
                key={todo.id} 
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                {editId === todo.id ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="edit-input"
                      autoFocus
                    />
                    <button 
                      type="button" 
                      onClick={() => saveEdit(todo.id)}
                      className="save-btn"
                    >
                      Save
                    </button>
                    <button 
                      type="button" 
                      onClick={cancelEdit}
                      className="cancel-btn"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <div 
                      className="todo-text"
                      onClick={() => toggleComplete(todo.id)}
                    >
                      {todo.text}
                    </div>
                    <div className="todo-actions">
                      <button 
                        onClick={() => startEdit(todo)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteTodo(todo.id)}
                        className="delete-btn"
                      >
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