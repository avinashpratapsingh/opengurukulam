import React from "react";
import Common from "./Common";
import webimage from "./img/img2.svg";


const About =() => { 
    return(<>
    <Common name="Know about" imgsrc={webimage} visit="/contact" btnname= "Contact Now"/>
    </>);
};

export default About;