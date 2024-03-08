import React, { Component, Fragment } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    let firstname = "Mikita";
    let lastname = "Shah";
    let numberOfIceCreams = 3

    let iceCreamPrice = 20;
    return (
      <Fragment>
        {/* <span>Hello {firstname} {lastname}! The total amount you need to pay for {numberOfIceCreams} is Rs.{numberOfIceCreams * iceCreamPrice} </span> */}
        <Header />
        <button>Add</button>
        <div>
          <span>Name</span> <br />
          <span>Phone</span>
        </div>
        <label htmlFor="name">Name: </label>
        <input type='text' id='name' placeholder='Type Here' defaultValue="Mikita"></input>
        <label htmlFor="phone">Phone: </label>
        <input type='tel' id='phone' placeholder='Type Here' defaultValue="1234567890"></input>
        
      </Fragment>
    );
  }

}

export default App;
