import React from 'react'
import { 
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    makeStyles,
    Divider
} from '@material-ui/core'
import { Fade } from 'react-reveal'
import expandIcon from 'assets/img/chevron-expand.svg'

const Experience = ({date, company, position, desc}) => {
    const styles = makeStyles({
        border: {
            boxShadow: '5px 5px 10px black',
            borderRadius: '15px'
        },
        divider: {
            marginTop: '10px',
            marginBottom: '10px'
        },
        date: {
            textTransform: 'uppercase',
            textDecoration: '"Montserrat", "Quicksand", sans-serif',
            letterSpacing: '0.2em',
            backgroundColor: 'rgb(178 , 226, 255)',
            marginRight: '15px',
            display: 'flex',
            alignItems: 'center'
        }
    })()

    const accordionRoot = {
        backgroundColor: 'rgb(0, 0, 0, 0)',
        border: 'none',
        borderRadius: '0px',
        boxShadow: 'none'
    }

    return (
    <Fade up>
    <Box width={'325px'} position={'relative'} display={'flex'}
         flexDirection={'row'} justifyContent={'center'} p={'5px'} m={'30px'} >
        
        <Box p={'20px'} ml={'10px'} mr={'10px'} color={'black'} 
             className={`${styles.date} ${styles.border}`}>
                <p>{date}</p>
        </Box>
        
        <Box bgcolor={'rgb(255,255,244)'} display={'flex'} alignItems={'center'}
            className={styles.border}>
            <Accordion style={accordionRoot}>
                <AccordionSummary expandIcon={ <img src={expandIcon} alt={'expand'}/>}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
                        <Typography>{company}</Typography>
                        <Divider className={styles.divider}/>
                        <Typography>{position}</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{desc}</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
          
    </Box>
    </Fade> 
    );
}
export default Experience;