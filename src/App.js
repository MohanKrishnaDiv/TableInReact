import './App.css';
import arr from './mock_data';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');



  return (
    <div className="App">
      <br/>
      <center>
      <input type="text" placeholder='search for user' value={search} onChange={(e) => setSearch(e.target.value)}/>
      </center><br/>
      <table>
          <tr>
            <th>id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>gender</th>
            <th>ip_address</th>
            <th>image</th>
          </tr>
      
       {arr.filter((item) => item.first_name.toLowerCase().includes(search.toLowerCase())).map((item) => {

         
        return <tr>
          <td>{item.id}</td>
          <td>{item.first_name}</td> 
          <td>{item.last_name}</td> 
          <td>{item.gender}</td> 
          <td>{item.ip_address}</td> 
          <td><img src={item.image} alt='img'/></td>
         </tr>
        

     })}
    </table>
    </div>
  );
}

export default App;
