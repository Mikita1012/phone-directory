import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShowSubscriber from './ShowSubscriber';
import reportWebVitals from './reportWebVitals';
import AddSubscriber from './AddSubscriber';
import './common/common.css'
import PhonDirectory from './PhonDirectory';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ShowSubscriber />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhonDirectory />
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <AddSubscriber />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
