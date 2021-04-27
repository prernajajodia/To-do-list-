import React, { useState} from 'react';
import './App.css';
import Header from './MyComponents/Header';
import {ToDos} from './MyComponents/ToDos';
import { Footer } from './MyComponents/Footer';
import {AddToDo} from './MyComponents/AddToDo';



function App() {

  const onDelete = (todos) => {
      console.log('I am deleted',todos)
      // let index = todoList.indexOf(todos)
      // todoList.splice(index,1)
      //deleting this way does not work in React

      setTodoList(todoList.filter((e) => {

        return e!== todos;
        
      }))

  }
  
  const addToDo = (title,desc) => {
    console.log("I am adding this to-do", title, desc)
    let sno;
    if (todoList.length === 0) {
      sno = 0;
    }
    else {
      sno = todoList[todoList.length - 1].sno + 1;
    }


    const myToDo = {
      sno: sno,
      title: title,
      desc : desc,
    }
      
    setTodoList([...todoList, myToDo]);
    console.log(myToDo)
  }


    const [todoList,setTodoList ] = useState( [
      {

        sno : 1,
        title: "Shopping",
        desc : "Grocery shopping"

      },
      {

        sno : 2,
        title: "Eating",
        desc : "Ice-cream"

      },
      {

        sno : 3,
        title: "Studying",
        desc : "Machine Learning"

      },
    
    ])


  return (
    <div>
      <Header title="To-Do List" searchBar={false} />
      <AddToDo addToDo={addToDo}/>
      <ToDos todoData = {todoList} onDelete = {onDelete} />
      <Footer />
    </div >
  );
}

export default App;
