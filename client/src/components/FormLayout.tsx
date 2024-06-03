import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import { Tab, Tabs, autocompleteClasses } from '@mui/material'

//* MUI
import Paper from '@mui/material/Paper'

// Icons
import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'



function RegisterAndLogin(props: { isRegisterTab: boolean }) {

  //* Handle change function
  const [checked, setChecked] = useState(props.isRegisterTab ? 'register' : 'login')

  const handleTabChange = (event, newValue) => {
    setChecked(newValue)
  }

  return (
    <Paper elevation={3} style={{
      alignItems: 'center',
      width: '20rem',
      padding: '1rem',
      textAlign: 'center',
      margin: '4rem auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // paddingBottom: '50rem',
      backgroundColor: 'rgb(255 255 255 / 90%)'
    }}>
      <Tabs
        value={checked}
        onChange={handleTabChange}
        centered
      >
        <Tab icon={<LockIcon />} label="Login" value="login" />
        <Tab icon={<PersonIcon />} label="Register" value="register" />
      </Tabs>
      {checked === 'login' ? <Login /> : <Register />}
    </Paper>
  )
}


export default RegisterAndLogin