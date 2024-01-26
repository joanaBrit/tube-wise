import { Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import axios from 'axios'

// Page components
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import TubeIndex from './components/LineIndex'
import Form from './components/Form'


function App() {

  // const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get('/')
      // console.log(data)
      } catch (error) {
        console.log('api', error)
      }
      
    }
    getData()
  }, [])


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tube' element={<TubeIndex />} />
      </Routes>
    </>
  )
}

export default App;


{/* <Route path='/form' element={
          <Form
            title=''
            fields={['username', 'email', 'password']}
            request={SubmitFormData}
            redirect='/success'
            onLoad={async () => ({ data: {} })}
          />} /> */}


            // const SubmitFormData = async (formData: FormData): Promise<{ data: any }> => {
  //   try {
  //     // send form data to the server
  //     const response = await axios.post('/api/submit', formData)
  //     return { data: response.data }
  //   } catch (error) {
  //     throw error
  //   }
  // }