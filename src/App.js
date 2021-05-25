import React from 'react';
import { HomePage } from 'views/homePage';
import Fade from 'react-reveal/Fade';
import { makeStyles, Box, ThemeProvider } from '@material-ui/core'
import clouds from 'assets/img/clouds.jpg'
import { theme } from 'theme'
import { SkillsView } from 'views/skillsView'
import { ExperienceView } from 'views/experienceView'

function App() {

  const styles = makeStyles({
    '& html': {
      fontSize: '10px'
    },
    app: {
      '& a': {
				color: 'currentColor',
				cursor: 'pointer',
				textDecoration: 'none'
			},
      overflowAnchor: 'none',
      backgroundColor: '#5f45bb',
      backgroundImage: 'linear-gradient(to bottom right, #180cac, #d054e4); color: #fff',
      '-mox-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased',
      lineHeight: '1.5',
      minWidth: '20rem',
      overflowX: 'hidden',
      textShadow: '0 3px 5px rgba(0, 0, 0, 0.1)'
    },
    wallpaper: {
      backgroundImage: `url(${clouds})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.2,
    },
    btn: {
      color: 'currentColor',
      cursor: 'pointer',
      textDecoration: 'none',
      position: 'relative',
      margin: '1rem'
    }
  })()

  return (
    <ThemeProvider theme={theme} >
    <Box textAlign={'center'} position={'relative'} className={styles.app}>
      <Box position={'fixed'} display={'block'} height={'100%'} left={0} top={0}
           width={'100%'} className={styles.wallpaper}>
      </Box>
      <Fade up>
        <HomePage/>
      </Fade>

      <SkillsView/>
      <ExperienceView/>

      <Box color={'currentColor'} mb={'2rem'} display={'flex'} 
           alignItems={'center'} justifyContent={'center'} 
           flexDirection={'column'}>
        <Fade>
          <h1 className={styles.title}>Contact</h1>
        </Fade>
        <Fade left>
          <a class={styles.btn} href="https://www.linkedin.com/in/ryan-watkins-08a523126/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class={styles.btn} href="https://github.com/rdwatkin" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Fade>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default App;
