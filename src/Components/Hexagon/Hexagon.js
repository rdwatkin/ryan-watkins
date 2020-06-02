import React from 'react';
import './Hexagon.css'
import controller from '../../assets/img/controller.svg';
import server from '../../assets/img/server.svg';
import layers from '../../assets/img/layers.svg';
import fileEarmark from '../../assets/img/file-earmark-code.svg';
import codeSlash from '../../assets/img/code-slash.svg';

function Hexagon (props) {

    /* Icon Selection */
    let icon
    switch ( props.icon ){
        case "Server":
            icon = <img class="center" src={server} alt="" width="40" height="40" title="Bootstrap"/>
            break
        case "layers":
            icon = <img class="center" src={layers} alt="" width="40" height="40" title="Bootstrap"/>
            break
        case "fileEarmark":
            icon = <img class="center" src={fileEarmark} alt="" width="40" height="40" title="Bootstrap"/>
            break
        case "codeSlash":
            icon = <img class="center" src={codeSlash} alt="" width="40" height="40" title="Bootstrap"/>
            break
        default:
            icon = <img class="center" src={controller} alt="" width="40" height="40" title="Bootstrap"/>
    }

    /* Color Selection */
    let color
    switch ( props.color ){
        case "blue":
            color = 'rgb(' + 178 + ',' + 226 + ',' + 255 + ')'
            break
        case "orange":
            color = 'rgb(' + 255 + ',' + 216 + ',' + 97 + ')'
            break
        case "green":
            color = 'rgb(' + 128 + ',' + 229 + ',' + 96 + ')'
            break;
        default:
            color = 'rgb(' + 128 + ',' + 229 + ',' + 96 + ')'
    }

    return (
        <div class="center">
            <div style={{borderRight: "30px solid " + color}} class="triangleUp"></div>
            <div style={{backgroundColor: color}} class="rectangle">
                {icon}
            </div>
            <div style={{borderLeft: "30px solid " + color}} class="triangle-down"></div>
        </div>
    );
}

export default Hexagon;