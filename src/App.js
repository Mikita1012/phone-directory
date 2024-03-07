import React, { Component, Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <div>
        <h1>Phone Directory</h1>
      </div>
      <button>Add</button>
      <div>
        <span>Name</span> <br />
        <span>Phone</span>
      </div>
      <img src="../images/upgrad_logo.png"/>
      <img src="../images/upgrad_logo.png"></img>
      <label htmlFor="name">Name: </label>
      <input type='text' id='name' placeholder='Type Here' defaultValue="Mikita"></input>
      <label htmlFor="phone">Phone: </label>
      <input type='tel' id='phone' placeholder='Type Here' defaultValue="1234567890"></input>
    </Fragment>
  );
}

export default App;
