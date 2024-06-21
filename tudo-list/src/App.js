import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  let [toduList,setToduList] = useState([]);
  let AddTask = (event) =>
  {
    
    event.preventDefault();
    let taskName = event.target.Task.value;
    if(!toduList.includes(taskName))
    {
      setToduList([...toduList,taskName]);
      console.log(toduList);
    }
    else
    {
      alert('already inserted');
    }
    // toduList.map((value)=>{
    // })
  }
  let List = toduList.map((v,i)=>{
    return (
    <Show value={v}/>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo List</h3>
        <form onSubmit={AddTask}>
          <input type="text" name="Task"/>
          <button>Add Task</button>
        </form>
        <ul>
          {List}
          
        </ul>
      </header>
    </div>
  );
}
function Show({value}){
  return(
    <li>{value}<span>&times;</span></li>
  )
}
export default App;
