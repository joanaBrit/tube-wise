import Form from './Form'
import axios from 'axios'



const Login = () => {
  const fields = [
    {
      type: 'text',
      name: 'Username',
      label: 'Username or Email'
    },
    {
      type: 'password',
      name: 'Password',
      label: 'Password'
    }
  ]

  function login(formData){
    return axios.post('/login', formData)
  }

  return (
    <Form title="Login" request={login} fields={fields.map(v=>v.name)} redirect='/tube'/>
  )
}

export default Login