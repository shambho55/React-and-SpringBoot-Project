import React,{useState} from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable.js';
import NewToDoForm from './components/NewToDoForm.js';

function App() {
  
     
  const [todos,setTodos] = useState([
    {rowNumber: 1, rowDescription: "Wake Up and Drink Water", rowAssigned: "Myself"},
    {rowNumber: 2, rowDescription: "Exercise and Do Yoga", rowAssigned: "Myself"},
    {rowNumber: 3, rowDescription: "Get Ready for Work", rowAssigned: "Myself"},
    {rowNumber: 4, rowDescription: "Charge Phone Battery", rowAssigned: "Myself"}
  ])
  
  const addToDo = () => {

    if(todos.length > 1){

      const newToDo = {
        rowNumber : todos.length + 1,
        rowDescription : "New Task",
        rowAssigned : "Myself"
      }

      setTodos(todos => [...todos,newToDo]);
      console.log(todos);

    }

  }

  return (

    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          To Do's List
        </div>
        <div className='card-body'>
          <ToDoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addToDo}>
            Add new ToDo
          </button>
          <NewToDoForm />
        </div>
      </div>
    </div>

  );
}

export default App;
