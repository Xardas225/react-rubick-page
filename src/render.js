import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { updateNewPostText } from './redux/state';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (state) => {

    ReactDOM.render(
      <BrowserRouter>
        <React.StrictMode>
          <App state={state} updateNewPostText={updateNewPostText} addPost={addPost} />
        </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
    );
    }
    