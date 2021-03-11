import React, { useState, useEffect } from 'react';
import './App.css';
//improting from components
import Form from './components/Form';
import ToDoList from './components/TodoList'

function App() {
  //state stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once when the app starts
  useEffect(()=>{
    getLocalsTodos();
  }, []);
  //Use Effects
  useEffect(()=> {
    filterHandler();
  }, [todos, status]);
  //functions
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'unconpleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
  //save local todos
  const saveLocalTodo = ()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  };
    }
  };
  const getLocalsTodos = ()=>{
    if(localStorage.getItem('todos')=== null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
     let todoLocal = JSON.parse(localStorage.getItem('todos'));
     setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Rafa`s To Do List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
       /> 
      <ToDoList 
      setTodos={setTodos}
       todos={todos}
       filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
