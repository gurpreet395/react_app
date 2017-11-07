import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './home.jsx'
import About from './about.jsx'
import Contact from './contacts.jsx'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <nav>
            <ul>
                <li><Link to = "/home">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/contact">Contact</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
)

export default Main
