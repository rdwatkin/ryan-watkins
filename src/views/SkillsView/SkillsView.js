import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import {
    webDev,
    network,
    embedded
} from 'assets/strings'
import { Fade } from 'react-reveal'
import { Card } from 'components/Card' 

const useStyles = makeStyles({
    list: {
        flexFlow: 'wrap'
    },
    title: {
        fontSize: '2.25rem',
        lineHeight: 1.125,
        marginBottom: '4rem',
        fontFamily: '"Monteserrat", "Quicksand", sans-serif',
        letterSpacing: '0.3rem',
        textTransform: 'uppercase'
    }
})

const SkillsView = () => {
    const styles = useStyles()
    return (
        <Box>
            <Fade>
            <h2 className={styles.title}>Skills</h2>
            </Fade>
        <Box height={'100%'} display={'flex'} alignItems={'center'} 
             justifyContent={'space-evenly'} mb={'10rem'} className={styles.list}>
          <Card dir="right" color="green" title="Website Development" text={webDev} icon="layers" />
          <Card dir="top" color="blue" title="Networking" text={network} icon="Server"/>
          <Card dir="left" color="orange" title="Embedded Programming" text={embedded} icon="codeSlash"/>
        </Box>
      </Box>
    )
}

export default SkillsView        