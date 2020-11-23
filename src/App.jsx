import React from "react";
import Home from './Home';
import Service from './Service';
import About from './About';

import Contact from './Contact';
import Footer from "./Footer";


import { Switch, Route, Redirect } from "react-router-dom";

const App =() => { 
    return(<>
    <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/service" component = {Service}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Redirect to="/" />
        <Home/>
    </Switch>
    <footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">Place sticky footer content here.</span>
  </div>
</footer>
    
    </>);
};

export default App;