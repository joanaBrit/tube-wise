//* MUI
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
// Icons
import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'

import { useState } from 'react'
import Login from './Login'
import Register from './Register'



interface FormLayoutProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean
}


function FormLayout(props: FormLayoutProps) {

  //* Handle change function
  const [checked, setChecked] = useState(true)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <>
    <Paper elevation={3}  style={{ }}>
      <Stack direction="row" spacing={1}>
        {props.checked ? (
          <Chip icon={<LockIcon />} label="Login" variant="outlined" color="primary" />
        ) : (
          <Chip icon={<PersonIcon />} label="Register" variant="outlined" color="primary" />
        )}
      </Stack>
      <Switch
        checked={props.checked}
        onChange={props.handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      {props.checked ? <Register /> : <Login onLogin={() => {}}/>}

      </Paper>
    </>
  )
}

export default FormLayout