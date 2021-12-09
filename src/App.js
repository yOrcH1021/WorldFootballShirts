import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <React.Fragment className="App">
      <NavBar item1="Jersey Shop" item2="Clubs" item3="National Teams" item4="Players"/>
      <ItemListContainer/>
    </React.Fragment>
  );
}

export default App;
