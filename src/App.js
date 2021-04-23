import './App.css';
import Header from './MyComponents/Header';
import {ToDos} from './MyComponents/ToDos';
import {Footer} from './MyComponents/Footer';



function App() {
  return (
    <div>
      <Header title = "To-Do List" searchBar = {false}/>
      <ToDos />
      <Footer />
    </div >
  );
}

export default App;
