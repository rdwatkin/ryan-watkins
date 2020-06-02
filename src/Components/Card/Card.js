import React from 'react';
import './Card.css'
import Fade from 'react-reveal/Fade';
import Hexagon from '../Hexagon/Hexagon'

function Card(props) {
    const dir = props.dir
    let transRight = false;
    let transLeft = false;
    let transUp = false;

    if (dir === "right") {
        transRight = true
    } else if (dir === "left"){
        transLeft = true
    } else if (dir === "top"){
        transUp = true
    }

    let icon = props.icon
    let bodyText = props.text
    let title = props.title

    return (
        <Fade left={transLeft} right={transRight} up={transUp} >
            <div className="card" >
                <div className="hex">
                    <Hexagon color = {props.color} icon={icon}/>
                </div>
                <h2> {title} </h2>
                <p> {bodyText} </p>
            </div>
        </Fade>
    );
}
  
export default Card;