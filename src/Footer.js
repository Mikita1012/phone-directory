import React, { useContext } from 'react'
import { SubscriberCountContext } from './SubscriberCountContext'

function Footer() {
    const count = useContext(SubscriberCountContext);
  return (
    <h4 style={{textAlign: 'center'}}>No of Subscribers: {count}</h4>
  )
}

export default Footer