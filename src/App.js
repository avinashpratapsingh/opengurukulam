import React from "react";
import Home from './Home';
import Service from './Service';
import About from './About';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./Navbar"

import Contact from './Contact';


import { Switch, Route, Redirect } from "react-router-dom";

const App =() => { 
    return(<>
    <NavBar/>
    <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/service" component = {Service}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Redirect to="/" />
        <Home/>
    </Switch>
    
    </>);
};

export default App;