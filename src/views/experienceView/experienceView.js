import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import {
    UCSC,
    arista,
    gemini,
    pt
} from 'assets/strings'
import { Fade } from 'react-reveal'
import { Experience } from 'components/experience'

const useStyles = makeStyles({
    title: {
        fontSize: '2.25rem',
        lineHeight: 1.125,
        marginBottom: '4rem',
        fontFamily: '"Monteserrat", "Quicksand", sans-serif',
        letterSpacing: '0.3rem',
        textTransform: 'uppercase'
    }
})

const ExperienceView = () => {
    const styles = useStyles()
    return (
    <Box>
        <Fade>
            <h2 className={styles.title}>Experience</h2>
        </Fade>
        <Box mt={'3rem'} height={'100%'} display={'flex'} alignItems={'center'}
            justifyContent={'center'} m={'1rem'} mb={'20rem'} 
            flexDirection={'column'}>
            <Experience date={["Oct. 2019 - Dec. 2019"]} company="University of California, Santa Cruz" position="Reader" desc={UCSC}/>
            <Experience date={["Jul. 2019 - Sep. 2019"]} company="Arista Networks" position="Software Engineering Intern" desc={arista}/>
            <Experience date={["Jul. 2018 - Sep. 2018"]} company="Gemini Design" position="Software Engineering Intern" desc={gemini}/>
            <Experience date={["Jul. 2017 - Sep. 2017"]} company="Patenaude and Felix APC" position="Information Technology Intern" desc={pt}/>
        </Box>

        <Fade>
        <h2 className={styles.title}>Education</h2>
        </Fade>
        <Box mt={'3rem'} height={'100%'} display={'flex'} alignItems={'center'}
            justifyContent={'center'} m={'1rem'} mb={'10rem'}
            flexDirection={'column'}>
            <Experience date={["Sep. 2016 - Dec. 2019"]} company="University of California, Santa Cruz" position="Bachelor of Science" desc="Major in Computer Science. Graduated with honors. GPA: 3.52 / 4"/>
        </Box>
    </Box>
    )
}

export default ExperienceView