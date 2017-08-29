import React from 'react';
import { Route, Link } from 'react-router-dom'
import { List } from './components/List';
import { Login } from './components/Login';
import { Preferences } from './components/Preferences';
import { Reminder } from './components/Reminder';

export function App() {
    return <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">"Login"</Link>
            <Link to="/preferences">Preferences</Link>
            <Link to="/reminder">Reminder</Link>
        </nav>
        <Route exact path="/" component={List}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/preferences" component={Preferences}/>
        <Route path="/reminder" component={Reminder}/>
    </div>;
}