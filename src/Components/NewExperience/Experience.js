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
import expandIcon from 'assets/img/chevron-expand.svg'

const Experience = ({date, company, position, desc}) => {

    const styles = makeStyles({
        root: {
            boxShadow: '5px 5px 10px black',
            backgroundColor: 'rgb(178 , 226, 255)',
            borderRadius: '15px'
        },
        divider: {
            marginRight: '10px',
            marginLeft: '10px'
        }
    })()

    return (
    <Box minWidth={'300px'} maxWidth={'650px'} position={'relative'}
         mt={'30px'} className={styles.root}>
        <Accordion>
            <AccordionSummary expandIcon={ <img src={expandIcon}/>}>
                <Box display={'flex'} flexDirection={'row'}>
                    <Typography>{date}</Typography>
                    <Divider orientation={'vertical'} className={styles.divider}/>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography>{company}</Typography>
                        <Typography>{position}</Typography>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{desc}</Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
    );
}
export default Experience;