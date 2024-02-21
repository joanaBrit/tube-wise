import { Routes, Route } from 'react-router-dom'
import React, { useEffect } from "react"
import axios from 'axios'

// Page components
import Home from './components/Home'
import Nav from './components/Nav'
import Tubelines from './components/TubeLines'
import LineIndex from './components/LineIndex'
import RegisterAndLogin from './components/FormLayout'

// Styles
import './styles/global.css'



function App() {

  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get('/')
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  // const location = useLocation()
  // const [user, setUser] = useState(isAuthenticated())

  // useEffect(() => {
  //   setUser(isAuthenticated())
  // }, [location])

  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
  //   () => localStorage.getItem('logged_user') !== null
  // )

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterAndLogin isRegisterTab={true} />} />
        <Route path='/login' element={<RegisterAndLogin isRegisterTab={false} />} />
        <Route path='/tube' element={<Tubelines />} />
        <Route path='/tude/:lineId' element={<LineIndex />} />
      </Routes>
    </>
  )
}


export default App