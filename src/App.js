import './App.css';
import Header from './MyComponents/Header';
import {ToDos} from './MyComponents/ToDos';
import {Footer} from './MyComponents/Footer';



function App() {

    let todoList = [
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
    
    ]


  return (
    <div>
      <Header title = "To-Do List" searchBar = {false}/>
      <ToDos todoData = {todoList} myprop = {2} />
      <Footer />
    </div >
  );
}

export default App;
