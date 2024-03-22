import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscriber from './ShowSubscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import { SubscriberCountContext } from './SubscriberCountContext';

export default function PhoneDirectory() {
    const [subscriberList, setSubcriberList] = useState([]);


    async function loadData() {
        const input = await fetch("http://localhost:7081/contacts")
        const data = await input.json()
        setSubcriberList(data);
        // fetch("http://localhost:7081/contacts"
        // .then(input => input.json())
        // .then(data => setSubcriberList(data));
    }

    useEffect(() => {
        loadData();
    }, []);

    const deleteSubscriberHandler = useCallback(async (subscriberId) =>{
        const rawResponse = await fetch("http://localhost:7081/contacts/" + subscriberId, { method: "DELETE" });
        const data = await rawResponse.json();
        loadData();
    }, [subscriberList]);

    const numberOfSubscriptions  = useMemo(()=>{
        return subscriberList.length
    }, [subscriberList])

    // async function deleteSubscriberHandler(subscriberId) {
        // const newSubscribers = subscriberList.filter((subscriber) => subscriber.id !== subscriberId);
        // setSubcriberList(newSubscribers)
        // console.log("deleted");

        // const rawResponse = await fetch("http://localhost:7081/contacts/" + subscriberId, { method: "DELETE" });
        // const data = await rawResponse.json();
        // loadData();
            // .then(input => input.json())
            // .then(data => {
            //     loadData();
            // })
    // }

    async function addSubscriberHandler(newSubscriber) {
        const rawResponse = await fetch("http://localhost:7081/contacts", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify(newSubscriber)
        })
        const data  = await rawResponse.json();
        loadData();

        // if (subscriberList.length > 0) {
        //     newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        // } else {
        //     newSubscriber.id = 1;
        // }

        // subscriberList.push(newSubscriber);
        // this.setState({ subscriberList: subscriberList });
        // setSubcriberList(subscriberList);
        // console.log(this.state.subscriberList);

    }



    return (
        <Fragment>
            <Router>
                <div>
                    <Route exact path="/add" render={({ history }, props) => <AddSubscriber {...props} addSubscriberHandler={(newSubscriber) => addSubscriberHandler(newSubscriber)} />} />
                    <Route exact path="/" render={(props) => <ShowSubscriber {...props} subscriberList={subscriberList} deleteSubscriberHandler={(subscriberId) => deleteSubscriberHandler(subscriberId)} />} />
                </div>
            </Router>
            <SubscriberCountContext.Provider value={numberOfSubscriptions}>
                <Footer></Footer>
            </SubscriberCountContext.Provider>
        </Fragment>
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