import React, { Component, Fragment } from 'react';
import Header from './Header';
import './App.css'

class App extends Component {
  render() {
    let subscribers = [
      {
        id: 1,
        name: 'Shilpa',
        phone: 8888888888
      },
      {
        id: 2,
        name: 'Shristi',
        phone: 9999999999
      }
    ]
    return (
      <Fragment>
        <Header />

        <div className='component-body-container'>
          <button className='custom-btn add-btn'>Add</button>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'>Name</span> 
            <span className='grid-item phone-heading'>Phone</span>
            <span className='grid-item phone-heading'></span>
            
          </div>
          {
            subscribers.map(sub => {
              return <div key={sub.id} className='grid-container'>
                <span className='grid-item'>{sub.name}</span> 
                <span className='grid-item'>{sub.phone}</span>
                <button className='deleteBtn'>DELETE</button>
              </div>
            })
          }
        </div>






        {/* <label htmlFor="name">Name: </label>
        <input type='text' id='name' placeholder='Type Here' defaultValue="Mikita"></input>
        <label htmlFor="phone">Phone: </label>
        <input type='tel' id='phone' placeholder='Type Here' defaultValue="1234567890"></input> */}

      </Fragment>
    );
  }

}

export default App;
