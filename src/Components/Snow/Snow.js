import React from 'react';
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    circles: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '& li': {
          position: 'absolute',
          display: 'block',
          listStyle: 'none',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          animation: '$snow 10s linear infinite',
          opacity: 0
        },
        '& li:nth-child(1)': {
          left: '25%',
          top: '15%',
          width: '10px',
          height: '10px',
          animationDelay: '0s'
        },
        '& li:nth-child(2)': {
          left: '75%',
          top: '0%',
          width: '20px',
          height: '20px',
          animationDelay: '2s'
        },
        '& li:nth-child(3)': {
          left: '90%',
          top: '20%',
          width: '10px',
          height: '10px',
          animationDelay: '3s'
        },
        '& li:nth-child(4)': {
          left: '30%',
          top: '40%',
          width: '15px',
          height: '15px',
          animationDelay: '1s'
        },
        '& li:nth-child(5)': {
          left: '50%',
          top: '5%',
          width: '10px',
          height: '10px',
          animationDelay: '7s'
        },
        '& li:nth-child(6)': {
            left: '55%',
            top: '25%',
            width: '10px',
            height: '10px',
            animationDelay: '5s'
        },
        '& li:nth-child(7)': {
            left: '60%',
            top: '0%',
            width: '15px',
            height: '15px',
            animationDelay: '9s'
        },
        '& li:nth-child(8)': {
            left: '30%',
            top: '5%',
            width: '10px',
            height: '10px',
            animationDelay: '3s'
        },
        '& li:nth-child(9)': {
            left: '35%',
            top: '3%',
            width: '10px',
            height: '10px',
            animationDelay: '5s'
        },
        '& li:nth-child(10)': {
            left: '20%',
            top: '50%',
            width: '10px',
            height: '10px',
            animationDelay: '4s'
        },
      },
      '@keyframes snow': {
        '0%': {
          transform: 'translateY(0)',
          opacity: 0
        },
        '10%': {
            opacity: 1
        },
        '100%': {
          transform: 'translateY(500px)',
          opacity: 0
        }
      }
})

const Snow = () => {
    const styles = useStyles()
    return (
        <Box component={'ul'} className={styles.circles}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </Box>
    )
}

export default Snow