import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react"
import axios from 'axios'

// Page components
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Tubelines from './components/TubeLines'
import RegisterAndLogin from './components/FormLayout'
import Map from './components/Map'
import Journey from './components/Journey'

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
        <Route path='/journey' element={<Journey />} />
        <Route path='/map' element={<Map />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App