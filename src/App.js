import logo from './logo.svg';
import './App.css';
import Todolist from './todocomponents/Todolist';
import TodoAdd from './todocomponents/TodoAdd';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <TodoAdd/>
      <Todolist/>
    </div>
  );
}

export default App;
