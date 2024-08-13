import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          To Do's List
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead> 
            <tbody>
              <tr>
                <th scope='col'>1</th>
                <td>2 DSA Questions</td>
                <td>Myself</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope='col'>2</th>
                <td>Java Project</td>
                <td>Myself</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default App;
