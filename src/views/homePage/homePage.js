import React from 'react';
import ryanPortrait from 'assets/img/ryan.JPG'
import { Box, makeStyles } from '@material-ui/core'

function HomePage() {

	const styles = makeStyles({
		hr: {
			content: "",
			transformOrigin: 'center left'
		},
		contact: {
			verticalAlign: 'top'
		},
		specialText: {
			fontFamily: '"Montserrat", "Quicksand", sans-serif',
			letterSpacing: '0.3rem',
			textTransform: 'uppercase'
		},
		pictureImage: {
			borderRadius: '2129.8rem',
			position: 'absolute',
			display: 'block',
			left: '0',
			top: '0',
			height: '100%',
			width: '100%'
		},
		pictureShadow: {
			borderRadius: '2129.8rem',
			backgroundImage: 'radial-gradient(#000 0%, rgba(0, 0, 0, 0) 75%)',
			position: 'absolute',
			display: 'block',
			top: '5%',
			left: '2%',
			height: '100%',
			width: '100%'
		},
		content: {
			alignItems: 'center',
			'@media screen and (max-width: 799px)': {
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '5rem 3rem'
			},
			'@media screen and (min-width: 800px)': {
				justifyContent: 'space-around'
			}
		},
		side: {
			'@media screen and (max-width: 799px)': {
				marginBottom: '3rem',
				width: '100%'
			},
			'@media screen and (min-width: 800px)': {
				flexGrow: '0',
				flexShrink: '0',
				height: '20rem',
				marginLeft: '4rem',
				order: '2',
				width: '20rem'
			}
		},
		about: {
			'@media screen and (min-width: 800px)': {
				flexGrow: '1',
				flexShrink: '1'
			}
		},
		picture: {
			'@media screen and (max-width: 799px)': {
				left: '-15%'
			}
		}
	})()

    return (
		<Box display={'flex'} position={'relative'} minHeight={'100vh'} mt={0}
			 className={styles.content}>
            <Box component={'aside'} maxHeight={'20rem'} maxWidth={'20rem'}
				 className={styles.side}> 
				<Box component={'figure'} pt={'100%'} position={'relative'} 
					 width={'100%'} className={styles.picture}>
					<Box className={styles.pictureShadow}></Box>
					<img className={styles.pictureImage}
						src={ryanPortrait} 
						alt="Portrait of Ryan Watkins"
						width="320"
						height="320"/> 
				</Box>
			</Box>
			<Box component={'main'} maxWidth={'26rem'} className={styles.about}>
				<Box component={'h1'} fontSize={'2.25rem'} lineHeight={'1.125'}
					  mb={'0.5rem'}>
					Hi, I'm Ryan Watkins
				</Box>
				<Box color={'#ffe479'} fontSize={'0.75rem'} className={styles.specialText}>
			      	Software Engineer
			    </Box>
				<Box component={'hr'} bgcolor={'#ff470f'} border={'none'}
					height={'0.1rem'} mb={'1.5rem'} mt={'1.5rem'} width={'4rem'}
					className={styles.hr}/>
				<Box fontSize={'1.5rem'}>
					<p>
						I spend my time playing video games, playing basketball, video editing, coding and (occasionally) trying new things!
					</p> 
				</Box>
				<Box display={'inline-block'} mt={'1.5rem'} className={styles.contact}>
					<a className={styles.specialText} href="mailto:rdwatkin@outlook.com">
			        Get in touch
			      </a>
		   		</Box>
	  		</Box>
        </Box>
    );
}

export default HomePage;