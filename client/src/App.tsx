import { Routes, Route } from 'react-router-dom'

// Page components
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import TubeIndex from './components/TubeIndex'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tube' element={<TubeIndex />} />
      </Routes>
    </>
  )
}

export default App;
