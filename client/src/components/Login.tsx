import Form from './Form'
import axios from 'axios'
import { API_ROOT } from '../constants'
import React, { FunctionComponent } from 'react'
import { setToken } from '../utils/Auth'
import { LoginResponse } from '../../../common/types'

import FormLayout from './FormLayout'



interface LoginProps {
  onLogin: (
    username: string,
    password: string,
  ) => void
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


  return (
    <>
        
          {/* <FormLayout handleChange={handleChange} checked={checked} /> */}
          <Form title="Login" request={login} fields={fields} redirect="/tube" processResponse={processResponse} />
  </>
  )

  function processResponse(data: LoginResponse) {
    if (data.token) {
      const tokenName = 'userID'
      setToken(tokenName, data.token)
    }
  }
}



export default Login