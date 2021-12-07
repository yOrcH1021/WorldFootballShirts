import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const styles = {
  //   color: 'black',
  //   backgroundColor: 'white'
  // }

  return (
    <React.Fragment className="App">
      <NavBar/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={styles}>Learn React</a>
      </header> */}
    </React.Fragment>
  );
}

export default App;
