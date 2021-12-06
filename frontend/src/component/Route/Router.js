import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "../Home/Home";
import UserGet from '../User/UserGet';
import UserPost from '../User/UserRegistration';

function Navigation(){
    return(
        <Router>
            <div>
                <Link to='/'>Main</Link>
                <Link to='/home'>Home</Link>
                <Link to='/user'>User</Link>
                <Link to='/register'>Registration</Link>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/user'>
                        <UserGet/>
                    </Route>
                    <Route path='/register'>
                        <UserPost/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navigation;