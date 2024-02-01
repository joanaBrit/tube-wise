import Form from './Form'
import axios from 'axios'
import { API_ROOT } from '../constants'
import React, { FunctionComponent } from 'react'
import { setToken } from '../utils/Auth'
import { LoginResponse } from '../../../common/types'

//* MUI
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
// Icons
import LockIcon from '@mui/icons-material/Lock'
import PersonIcon from '@mui/icons-material/Person'



interface LoginProps {
  onLogin: (
    username: string,
    password: string,
  ) => void
}

interface FormLayoutProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checked: boolean
}



const Login: FunctionComponent<LoginProps> = ({ onLogin }) => {
  const fields = [
    {
      type: 'text',
      name: 'username',
      label: 'Username or Email',
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
    }
  ]

  function login(formData) {
    return axios.post(API_ROOT + '/login', formData)
  }
  //* Handle change function
  const [checked, setChecked] = React.useState(true)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <>
      <div className="form">
        <Paper elevation={3}>
          <FormLayout handleChange={handleChange} checked={checked} />
          <Form title="Login" request={login} fields={fields} redirect="/tube" processResponse={processResponse} />
        </Paper>
      </div>
    </>
  )

  function processResponse(data: LoginResponse) {
    if (data.token) {
      const tokenName = 'userID'

      setToken(tokenName, data.token)
    }
  }
}

function FormLayout(props: FormLayoutProps) {

  return (
    <>
      <Stack direction="row" spacing={1}>
        {props.checked ? (
          <Chip icon={<LockIcon />} label="Login" variant="outlined" color="primary" />
        ) : (
          <Chip icon={<PersonIcon />} label="Register" variant="outlined" color="primary" />
        )}
      </Stack>
      <Switch
        // checked={props.checked}
        onChange={props.handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </>
  )
}

export default Login