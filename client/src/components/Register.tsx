import Form from './Form'
import axios from 'axios'



const Register = () => {
  const fields = [
    {
      type: 'text',
      name: 'Username',
      label: 'Username',
    },
    {
      type: 'email',
      name: 'Email',
      label: 'Email',
    },
    {
      type: 'password',
      name: 'Password',
      label: 'Password',
    },
    {
      type: 'password',
      name: 'Password Confirmation',
      label: 'Password Confirmation',
    }
  ]

  function register(formData){
    return axios.post('/register', formData)
  }

  return (
    <Form title="Register" request={register} fields={fields.map(v=>v.name)} redirect="/login"/>
  )
}

export default Register