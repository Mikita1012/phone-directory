import React, { Component, useState } from 'react'
import Header from './Header'
import './AddSubscriber.css'
// import './App.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AddSubscriber({addSubscriberHandler}) {
    const [addSubscriberForm, setAddSubscriberForm] = useState({
        id: 0,
        name: '',
        phone: ''
    })

    const history = useHistory()
    

    function inputChangeHandler(e) {
        const state = addSubscriberForm
        state[e.target.name] = e.target.value;
        // setAddSubscriberForm({
        //     id: state["id"],
        //     name: state["name"],
        //     phone: state["phone"]
        // }); // this can be used for a small object, 
        //below is a way when we have object with larger keys-value pairs

        setAddSubscriberForm({...state})
    }
    
    const onFormSubmitted = (e) => {
        e.preventDefault();
       addSubscriberHandler(addSubscriberForm);
       setAddSubscriberForm({ id: 0, name: '', phone: ' ' });
       history.push("/");

    }

    const {name, phone} = addSubscriberForm;

    return (
        <>
        <Header heading="Add Subscriber" />
        <div className='component-body-container'>
            <Link to="/">
                <button className="custom-btn">Back</button>
            </Link>
            <form className='subscriber-form' onSubmit={onFormSubmitted}>
                <label htmlFor="name" className="label-control">Name: </label> <br />
                <input type='text' id='name' name='name' className="input-control" onChange={inputChangeHandler}></input> <br /> <br />
                <label htmlFor="phone" className="label-control">Phone: </label> <br />
                <input type='tel' name='phone' id='phone' className="input-control" onChange={inputChangeHandler}></input> <br /> <br />
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

// export default class AddSubscriber extends Component {
//     constructor() {
//         super();
        // this.state = {
        //     id: 0,
        //     name: '',
        //     phone: ''
        // }
//         console.log(this.state);
//     }

    // inputChangeHandler = (e) => {
    //     const state = this.state;
    //     state[e.target.name] = e.target.value;
    //     this.setState(state);
    //     console.log(this.state);
    // }
    
    // onFormSubmitted = (e) => {
    //     e.preventDefault();
    //     this.props.addSubscriberHandler(this.state);
    //     this.setState({ id: 0, name: '', phone: ' ' });
    //     this.props.history.push("/");
    // }
//     render() {
//         const {name, phone} = this.state;
//         return (
//             <>
//                 <Header heading="Add Subscriber" />
//                 <div className='component-body-container'>
//                     <Link to="/">
//                         <button className="custom-btn">Back</button>
//                     </Link>
//                     <form className='subscriber-form' onSubmit={this.onFormSubmitted.bind(this)}>
//                         <label htmlFor="name" className="label-control">Name: </label> <br />
//                         <input type='text' id='name' name='name' className="input-control" onChange={this.inputChangeHandler}></input> <br /> <br />
//                         <label htmlFor="phone" className="label-control">Phone: </label> <br />
//                         <input type='tel' name='phone' id='phone' className="input-control" onChange={this.inputChangeHandler}></input> <br /> <br />
//                         <div className='subscriber-info-container'>
//                             <span className='subscriber-to-add-heading'>Subscriber to be added</span> <br/>
//                             <span className='subscriber-info'>Name: {name}</span> <br/>
//                             <span className='subscriber-info'>Phone: {phone}</span>
//                         </div>
//                         <button className='custom-btn add-btn'>ADD</button>
//                     </form>
//                 </div>
//             </>
//         )
//     }
// }