import Search from "./Components/Search";
import './App.css';
import React from 'react';
import Form from "./Components/Form";
import InfoBox from "./Components/infoBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: "lightblue"}}>Search For Your Favorite Pokemon</h1>
      <Search/>
      <Form/>
      <InfoBox />
     
      </header>
    </div>
  );
}



export default App;
