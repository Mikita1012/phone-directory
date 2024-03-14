import React, { Component } from 'react'
import AddSubscriber from './AddSubscriber'
import ShowSubscriber from './ShowSubscriber';


export default class PhonDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: [{
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
            ]
        }
    }

    addSubscriber = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if (subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }

        subscriberList.push(newSubscriber);
        this.setState({ subscriberList: subscriberList });
        console.log(this.state.subscriberList);
    }
    render() {
        return (
            <>
            {/* <AddSubscriber addSubscriberHandler={this.addSubscriber} /> */}
            <ShowSubscriber subscriberList={this.state.subscriberList}/>
            </>
        )
    }
}
