import React from 'react';
import './Experience.css';
import Fade from 'react-reveal/Fade';

function Experience(props) {

    return(
        <div className="expContainer">
            <Fade up>
            <div className="company">
                <h2> {props.date} </h2>
                <h2> {props.company} </h2>
            </div>
            </Fade>
            <Fade right>
            <div className="description">
                <h2> {props.position} </h2>
                <p> {props.desc} </p>
            </div>
            </Fade>
        </div>
    )

}

export default Experience;
