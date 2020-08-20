import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const users = [
    {
    firstName:'Bryan',
    lastName:'Olivares'
    },
    {
    firstName:'Angel',
    lastName:'Paredes'
    },
    {
    firstName:'Miguel',
    lastName:'Martinez'
    }
    ];
ReactDOM.render(
  <React.StrictMode>
    <App users={ users }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
