import './App.css';
import ToDoTable from './components/ToDoTable.js';

function App() {
  
     
  const todos = [
    {rowNumber: 1, rowDescription: "Wake Up and Drink Water", rowAssigned: "Myself"},
    {rowNumber: 2, rowDescription: "Exercise and Do Yoga", rowAssigned: "Myself"},
    {rowNumber: 3, rowDescription: "Get Ready for Work", rowAssigned: "Myself"}
  ]
  
  return (

    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          To Do's List
        </div>
        <div className='card-body'>
          <ToDoTable todos={todos}/>
        </div>
      </div>
    </div>

  );
}

export default App;
