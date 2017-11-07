import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import Content from './Content.jsx'
import Home from "./home.jsx"
import About from "./about.jsx"
import Contact from "./contacts.jsx"
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

ReactDOM.render((
    <Router>
            <App/>
    </Router>

), document.getElementById('app'))