import Form from './Form'
import axios from 'axios'
import { API_ROOT } from '../constants'



const Login = () => {
  const fields = [
    {
      type: 'text',
      name: 'Username',
      label: 'Username or Email',
    },
    {
      type: 'password',
      name: 'Password',
      label: 'Password',
    }
  ]

  function login(formData){
    return axios.post(API_ROOT+'/login', formData)
  }

  return (
    <Form title="Login" request={login} fields={fields} redirect="/tubelines"/>
  )
}

export default Login