import { Routes, Route } from 'react-router-dom'

// Page components
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import TubeIndex from './components/LineIndex'
import Form from './components/Form'
import axios from 'axios'


function App() {

  const SubmitFormData = async (formData: FormData): Promise<{ data: any }> => {
    try {
      // send form data to the server
      const response = await axios.post('/api/submit', formData)
      return { data: response.data }
    } catch (error) {
      throw error
    }
  }


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/form' element={
          <Form
            title=''
            fields={['username', 'email', 'password']}
            request={SubmitFormData}
            redirect='/success'
            onLoad={async () => ({ data: {} })}
          />} /> */}
        <Route path='/tube' element={<TubeIndex />} />
      </Routes>
    </>
  )
}

export default App;
