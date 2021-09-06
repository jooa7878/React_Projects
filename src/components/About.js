import React from 'react';
import '../sass/About.scss';

import {faLink, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <section className="about-container">
      <div className="about-inner">
        <div className="about-title">

         <FontAwesomeIcon className="icon" icon={faLink}/>
         <div className="title"> About Me</div>
        </div>
      </div>
    </section>
  )
}

export default About;