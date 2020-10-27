import React from 'react';
import { HomePage } from 'views/HomePage';
import { Card } from './components/Card';
import Fade from 'react-reveal/Fade';
import { Experience } from './components/Experience'
import {makeStyles, Box} from '@material-ui/core'
import clouds from './assets/img/clouds.jpg'
import {
  webDev,
  network,
  embedded,
  arista,
  UCSC,
  gemini,
  pt
} from './assets/strings'

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

    <Box textAlign={'center'} position={'relative'} className={styles.app}>
      <Box position={'fixed'} display={'block'} height={'100%'} left={0} top={0}
           width={'100%'} className={styles.wallpaper}></Box>
      <Fade up>
        <HomePage/>
      </Fade>
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
      </Box>

      <Box>
          <Fade>
            <h2 className={styles.title}>Education</h2>
          </Fade>
        <Box mt={'3rem'} height={'100%'} display={'flex'} alignItems={'center'}
             justifyContent={'center'} m={'1rem'} mb={'10rem'}
             flexDirection={'column'}>
          <Experience date={["Sep. 2016 - Dec. 2019"]} company="University of California, Santa Cruz" position="Bachelor of Science" desc="Major in Computer Science. Graduated with honors. GPA: 3.52 / 4"/>
        </Box>
      </Box>

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
  );
}

export default App;
