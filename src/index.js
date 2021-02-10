import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let messages = [
  { message: "Hi"},
  { message: "How are you?"},
  { message: "It's cool"}
]


let dialogs = [
  {id:1, name: "Kunkka"},
  {id:2, name: "Luna"},
  {id:3, name: "Bounty Hunter"},
  {id:4, name: "Axe"},
  {id:5, name: "Dazzle"}
]


let Posts = [
  {id:1 , message: "Hi? how are u?", likesCount: `likes: 11` },
  {id:2 , message: "My first post! It's nice", likesCount: `likes: 12`},
  {id:3 , message: "Today I'm learn method map", likesCount:  `likes: 8` }
]


ReactDOM.render(


  <React.StrictMode>
    <App Posts={Posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
