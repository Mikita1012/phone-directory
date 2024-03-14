import React, { Component, Fragment } from 'react';
import Header from './Header';
import './ShowSubscriber.css'
import AddSubscriber from './AddSubscriber';

class ShowSubscriber extends Component {

  render() {
    return (
      <Fragment>
        <Header heading="Phone Directory"/>
        <div className='component-body-container'>
          <button className='custom-btn add-btn'>Add</button>

          <div className='grid-container heading-container'>
            <span className='grid-item name-heading'>Name</span> 
            <span className='grid-item phone-heading'>Phone</span>
            <span className='grid-item phone-heading'></span>
            
          </div>
          {
            this.props.subscriberList && this.props.subscriberList.map(sub => {
              return <div key={sub.id} className='grid-container'>
                <span className='grid-item'>{sub.name}</span> 
                <span className='grid-item'>{sub.phone}</span>
                <button className='custom-btn deleteBtn' onClick={this.deleteHandler}>DELETE</button>  {/* using onClick event*/}
                {/* <button className='custom-btn deleteBtn' onClick={this.deleteHandler.bind(this, "Delete Clicked")}>DELETE</button> */} {/* using bind method*/}
              </div>
            })
          }

        </div>

      </Fragment>
    );
  }

}

export default ShowSubscriber;
