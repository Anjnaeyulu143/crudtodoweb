import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink, useNavigate } from "react-router-dom"
import App from "./App"

// import articles from './reducers';

// import {createStore} from "redux"

// const store = createStore(articles)

// console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
