import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './MyComponents/Header';
import {ToDos} from './MyComponents/ToDos';
import { Footer } from './MyComponents/Footer';
import { AddToDo } from './MyComponents/AddToDo';
import {About} from './MyComponents/About'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";




function App() {

  let initToDo;
  if (localStorage.getItem("todoList")=== null) {
    initToDo = []
  }
  else {
    initToDo = JSON.parse(localStorage.getItem("todoList"))
  }

  const onDelete = (todos) => {
      console.log('I am deleted',todos)
      // let index = todoList.indexOf(todos)
      // todoList.splice(index,1)
      //deleting this way does not work in React

      setTodoList(todoList.filter((e) => {

        return e!== todos;
        
      })) 
     localStorage.setItem("todoList",JSON.stringify(todoList))

  }
  
  const addToDo = (title, desc) => {
    
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


  const [todoList, setTodoList] = useState(initToDo)
  
    useEffect(() => {
        localStorage.setItem("todoList",JSON.stringify(todoList))
      }, [todoList])


  return (
    <div style= {{backgroundColor : "#F1F4FFFF"}}>
      <Router>
        <Header title="To-Do List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div>
            <AddToDo addToDo={addToDo}/>
         <ToDos todoData = {todoList} onDelete = {onDelete} />
                </div>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
         <Footer />
      </Router>
    </div >
  );
}

export default App;
