import React from 'react';
import { HomePage } from 'views/HomePage';
import { Snow } from 'components/Snow'
import Fade from 'react-reveal/Fade';
import { makeStyles, Box, ThemeProvider } from '@material-ui/core'
import clouds from 'assets/img/clouds.jpg'
import { theme } from 'theme'
import { SkillsView } from 'views/SkillsView'
import { ExperienceView } from 'views/ExperienceView'
import { ContactView } from 'views/ContactView'

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
    }
  })()

  return (
    <ThemeProvider theme={theme} >
    
    <Box textAlign={'center'} position={'relative'} className={styles.app}>
      <Box position={'fixed'} display={'block'} height={'100%'} left={0} top={0}
           width={'100%'} className={styles.wallpaper}>
            <Snow/>
           </Box>
      <Fade up>
        <HomePage/>
      </Fade>

      <SkillsView/>
      <ExperienceView/>
      <ContactView/>
    </Box>
    
    </ThemeProvider>
  );
}

export default App;
