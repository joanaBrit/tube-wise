//* MUI
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Switch from '@mui/material/Switch'
// Icons
import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'

import { useState } from 'react'
import Login from './Login'
import Register from './Register'


function RegisterAndLogin(props: { isRegisterTab: boolean }) {

  //* Handle change function
  const [checked, setChecked] = useState(props.isRegisterTab ?? false)
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked)
  // }

  return (
    <>
      <Paper elevation={3} style={{}}>

        {checked
          ? <Chip icon={<LockIcon />} label="Login" variant="outlined" color="primary" />
          : <Chip icon={<PersonIcon />} label="Register" variant="outlined" color="primary" />
        }

        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {checked ? <Register /> : <Login />}

      </Paper>
    </>
  )
}

export default RegisterAndLogin