import React, { Component, useState } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscriber from './ShowSubscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function PhoneDirectory() {
    const [subscriberList, setSubcriberList] = useState([{
        id: 1,
        name: 'Shipla Bhatt',
        phone: 9999999999
    },
    {
        id: 2,
        name: 'Shristi Gupta',
        phone: 8888888888
    },
    {
        id: 3,
        name: 'Raj Kumar',
        phone: 2345123456
    }
    ]);

    function deleteSubscriberHandler(subscriberId) {
        const newSubscribers = subscriberList.filter((subscriber) => subscriber.id !== subscriberId);
        setSubcriberList(newSubscribers)
    }

    function addSubscriberHandler(newSubscriber){
        if (subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }

        subscriberList.push(newSubscriber);
        // this.setState({ subscriberList: subscriberList });
        setSubcriberList(subscriberList);
        // console.log(this.state.subscriberList);
    }

        

    return (
            <>
                <Router>
                    <div>
                        <Route exact path="/" render={(props) => <ShowSubscriber {...props} subscriberList={subscriberList} deleteSubscriberHandler={(subscriberId) => deleteSubscriberHandler(subscriberId)} />} />
                        <Route exact path="/add" render={({ history }, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={(newSubscriber) => addSubscriberHandler(newSubscriber)} />} />
                    </div>
                </Router>
            </>
        )
}

// export default class PhoneDirectory extends Component {
//     constructor() {
//         super();
//         this.state = {
//             subscriberList: [{
//                 id: 1,
//                 name: 'Shipla Bhatt',
//                 phone: 9999999999
//             },
//             {
//                 id: 2,
//                 name: 'Shristi Gupta',
//                 phone: 8888888888
//             },
//             {
//                 id: 3,
//                 name: 'Raj Kumar',
//                 phone: 2345123456
//             }
//             ]
//         }
//     }

    // addSubscriberHandler = (newSubscriber) => {
    //     let subscriberList = this.state.subscriberList;
    //     if (subscriberList.length > 0) {
    //         newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
    //     } else {
    //         newSubscriber.id = 1;
    //     }

    //     subscriberList.push(newSubscriber);
    //     this.setState({ subscriberList: subscriberList });
    //     console.log(this.state.subscriberList);
    // }

    // deleteSubscriberHandler = (subscriberId) => {
    //     let subscriberList = this.state.subscriberList;
    //     let subscriberIndex = 0;
    //     subscriberList.forEach(function (subscriber, index) {
    //         if (subscriber.id === subscriberId) {
    //             subscriberIndex = index;
    //         }

    //     }, this);

    //     let newSubscribers = subscriberList;
    //     newSubscribers.splice(subscriberIndex, 1);
    //     this.setState({ subscribers: newSubscribers });
    // }


//     render() {
//         return (
//             <>
//                 <Router>
//                     <div>
//                         <Route exact path="/" render={(props) => <ShowSubscriber {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
//                         <Route exact path="/add" render={({ history }, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
//                     </div>
//                 </Router>
//             </>
//         )
//     }
// }