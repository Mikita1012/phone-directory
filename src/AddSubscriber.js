import React, { Component } from 'react'
import Header from './Header'
import './AddSubscriber.css'
// import './App.css'

export default class AddSubscriber extends Component {
    render() {
        return (
            <>
                <Header heading="Add Subscriber" />
                <div className='component-body-container'>
                    <button className='custom-btn'>BACK</button>
                    <form className='subscriber-form'>
                        <label htmlFor="name" className="label-control">Name: </label> <br />
                        <input type='text' id='name' className="input-control"></input> <br /> <br />
                        <label htmlFor="phone" className="label-control">Phone: </label> <br />
                        <input type='tel' id='phone' className="input-control"></input> <br /> <br />
                        <div className='subscriber-info-container'>
                            <span className='subscriber-to-add-heading'>Subscriber to be added</span> <br/>
                            <span className='subscriber-info'>Name: </span> <br/>
                            <span className='subscriber-info'>Phone: </span>
                        </div>
                        <button className='custom-btn add-btn'>ADD</button>
                    </form>
                </div>
            </>
        )
    }
}
