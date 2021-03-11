import React from 'react';
//import components
import Todo from './Todo'

const ToDoList = ({todos, setTodos, filteredTodos})=>{
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map((todo) => (
                    <Todo 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text}
                    setTodos={setTodos}
                    todos={todos} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;