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
        elevation={0}
        sx={{
          width: '100%',
          height: 150,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'rgb(4 28 52)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}

      >
        <Typography
          sx={{
            letterSpacing: '.1rem',
            color: '#fff',
            margin: '0 4rem'
          }}
        >
          <h3>Need help?</h3>
          <div className='help-elements'>
            <a href='mailto:joanabrito216@gmail.com'>Email Me</a>
            <a href='https://tfl.gov.uk/'>TFL Support</a>
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
          <p>© 2024 Tube Wise</p>
        </div>
      </Paper >
    </>
  )
}

export default Footer