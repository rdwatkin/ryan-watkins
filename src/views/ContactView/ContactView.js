import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import { Fade } from 'react-reveal'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
    btn: {
        color: 'currentColor',
        cursor: 'pointer',
        textDecoration: 'none',
        position: 'relative',
        margin: '3px'
      }
})

const ContactView = () => {
    const styles = useStyles()
    return (
        <Box color={'currentColor'} mb={'2rem'} display={'flex'} 
           alignItems={'center'} justifyContent={'center'} 
           flexDirection={'row'}>
        <Fade left>
            <Box>
                <a class={styles.btn} href="https://www.linkedin.com/in/ryan-watkins-08a523126/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
            </Box>
            <Box>
                <a class={styles.btn} href="https://github.com/rdwatkin" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
            </Box>
        </Fade>
      </Box>
    )
}

export default ContactView