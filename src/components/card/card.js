import React from 'react';
import Fade from 'react-reveal/Fade';
import { Hexagon } from './hexagon'
import { Box, makeStyles } from '@material-ui/core'

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

    const styles = makeStyles({
        content: {
            '& h2': {
                position: 'absolute',
                left: '50%',
                top: '10%',
                transform: 'translate(-50%)',
                padding: '5px',
                color: 'rgb(44, 41, 41)',
                textTransform: 'uppercase',
                fontFamily: '"Montserrat", "Quicksand", sans-serif',
                letterSpacing: '0.2em',
                fontWeight: 'bolder'
            },
            '& p': {
                position: 'relative',
                color: 'rgb(44, 41, 41)',
                marginTop: '40px',
                marginLeft: '25px',
                marginRight: '25px',
                fontFamily: '"Montserrat", "Quicksand", sans-serif',
                letterSpacing: '0.1em',
            }
        },
        card: {
            boxShadow: '5px 5px 10px black',
            transition: 'transform .4s',
            '&:hover': {
                transform: 'scale(1.2)',
            }
        }
    })()

    return (
        <Fade left={transLeft} right={transRight} up={transUp} >
            <Box className={styles.content}>
                <Box height={'325px'} width={'325px'} minHeight={'250px'} 
                    minWidth={'300px'} position={'relative'} mt={'100px'}
                    border={'1px solid black'} bgcolor={'rgb(255,255,244)'}
                    borderRadius={'15px'} className={styles.card}>
                    <Box height={'100px'} position={'relative'} top={'-50px'}>
                        <Hexagon color = {props.color} icon={icon}/>
                    </Box>
                    <h2> {title} </h2>
                    <p> {bodyText} </p>
                </Box>
            </Box>
        </Fade>
    );
}
  
export default Card;