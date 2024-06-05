// MUI
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'



function Footer() {

  return (
    <>
      <Paper
        className='footer'
        elevation={0}
        sx={{
          width: '100%',
          height: 'var(--footer-height)',
          position: 'fixed',
          bottom: 0,
          backgroundColor: 'rgb(4 28 52)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (min-width: 600px)': { gap: '8rem' }
        }}

      >
        <Typography
          sx={{
            letterSpacing: '.1rem',
            color: '#fff',
            margin: '0 2rem',
            width: '50%'
          }}
        >
          <div className='help-container'>
            <h3>Need help?</h3>
            <div className='help-elements'>
              <a href='mailto:joanabrito216@gmail.com'>Email Me</a>
              <a href='https://tfl.gov.uk/'>TFL Support</a>
            </div>
          </div>
        </Typography>
        <div className='icon-container'>
          <div className='navigation-btn'>
            <a href='https://www.linkedin.com/in/joana-brito216/'>
              <LinkedInIcon />
            </a>
            <a href='https://github.com/joanaBrit'>
              <GitHubIcon />
            </a>
            <a href='https://joanabrit.github.io/portfolio/'>
              <LanguageIcon />
            </a>
          </div>
          <p style={{ textAlign: 'center' }}>© 2024 Tube Wise</p>
        </div>
      </Paper >
    </>
  )
}

export default Footer