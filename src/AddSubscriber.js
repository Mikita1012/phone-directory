import React, { Component } from 'react'
import Header from './Header'
import './AddSubscriber.css'
// import './App.css'

export default class AddSubscriber extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
        console.log(this.state);
    }

    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }


    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0, name: '', phone: ''});
    }
    
    render() {
        const {name, phone} = this.state;
        return (
            <>
                <Header heading="Add Subscriber" />
                <div className='component-body-container'>
                    <button className='custom-btn'>BACK</button>
                    <form className='subscriber-form' onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name: </label> <br />
                        <input type='text' id='name' name='name' className="input-control" onChange={this.inputChangeHandler}></input> <br /> <br />
                        <label htmlFor="phone" className="label-control">Phone: </label> <br />
                        <input type='tel' name='phone' id='phone' className="input-control" onChange={this.inputChangeHandler}></input> <br /> <br />
                        <div className='subscriber-info-container'>
                            <span className='subscriber-to-add-heading'>Subscriber to be added</span> <br/>
                            <span className='subscriber-info'>Name: {name}</span> <br/>
                            <span className='subscriber-info'>Phone: {phone}</span>
                        </div>
                        <button className='custom-btn add-btn'>ADD</button>
                    </form>
                </div>
            </>
        )
    }
}