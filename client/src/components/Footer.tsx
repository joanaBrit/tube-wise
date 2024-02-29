// MUI
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import Paper from '@mui/material/Paper'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'



function Footer() {

  return (
    <>
      <Paper
        elevation={1}
        sx={{
          width: '100%',
          height: 100,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'rgb(0 0 0 / 100%)'
        }}
      >
        <div className='navigation-button'>
          <BottomNavigation>
          <BottomNavigationAction  icon={<LinkedInIcon />} />
          <BottomNavigationAction  icon={<GitHubIcon />} />
          <BottomNavigationAction  icon={<LanguageIcon />} />
          </BottomNavigation>
        </div>
      </Paper>
    </>
  )
}

export default Footer