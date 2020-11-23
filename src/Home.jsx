import React from "react";
import webimage from "./img/img1.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

const Home =() => { 
    return(<>
     <Common name="आपका गुरुकुल आपके द्वार - Helping you find yourself" imgsrc={webimage} visit="/service" btnname= "Get Started"/>
     <About/>
     <Service/><Contact/>
    </>);
};

export default Home;