import React from 'react';
import logo from './assets/pic.png';
import './App.css';
import  FunctionComponent  from './components/functionalcomp';
import ClassComponent from './components/classcomp';
import ThankComp from './components/nestedfun';
import det from './data/details.json';

function App() {
 return (
   
    <div className='Wrapper'>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      <h1>About React</h1>
      <FunctionComponent/>
      <ClassComponent/>
      {/* <ThankComp/> */}
      <displaycomp/>
      <Display/>
      <ThankComp/>
      {/* <h1>React Users</h1>
      {det.map((detail,i)=>
      <div key={i}>
        <h6>{detail.userid}</h6>
        <h6>{detail.Name}</h6>
        <h6>{detail.project}</h6>
        <h6>{detail.Budget}</h6>
        </div>
      )} */}

    </div>
  
  );
}

function Display() 
{
  const Display = det.map(
    (records) => {
      return (
        <tr>
          <td>{records.userid}</td>
          <td>{records.Name}</td>
          <td>{records.project}</td>
          <td>{records.Budget}</td>
        </tr>
      )
    }
  )

  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Project</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody class= "table table-light">
          {Display}
        </tbody>
      </table>
    </div>
  )
}



export default App;
