import React from 'react';
import Nav from './Nav';
import App from './App';
// import TodoPages from '../todo/Layout'
import { HashRouter as Router, Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

function Layout() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path='/todo'>
                        <Todo />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home() {
    return (
        <div>
            {/* <style scoped>
                @import "../index.css";
            </style> */}
            <h1>People</h1>
            <App />
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

function Todo() {
    return (
        <div>
            <h1>Todo</h1>
        </div>
    )
}

export default Layout;
