import React, { Fragment, useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscriber from './ShowSubscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import { SubscriberCountContext } from './SubscriberCountContext';
import { TotalSubscribersReducer } from './TotalSubscribersReducer';
import { useDispatch } from 'react-redux';

export default function PhoneDirectory() {
    const [subscriberList, setSubcriberList] = useState([]);
    const [state, dispatchToTotalSubscriberReducer] = useReducer(TotalSubscribersReducer, {count:0});

    const dispatch = useDispatch();

    async function loadData() {
        const input = await fetch("http://localhost:7081/contacts")
        const data = await input.json();

        // dispatch({"type":"UPDATE_COUNT", payload: data.length})
        dispatch({"type": "SET_SUBSCRIBERS", payload: data});
        dispatchToTotalSubscriberReducer({"type":"UPDATE_COUNT", payload: data.length})
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

    // const numberOfSubscriptions  = useMemo(()=>{
    //     return subscriberList.length
    // }, [subscriberList])

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
                    <Route exact path="/" render={(props) => <ShowSubscriber {...props}  deleteSubscriberHandler={(subscriberId) => deleteSubscriberHandler(subscriberId)} />} />
                </div>
            </Router>
            <SubscriberCountContext.Provider value={subscriberList.length}>
                <Footer></Footer>
            </SubscriberCountContext.Provider>
        </Fragment>
    )
}

