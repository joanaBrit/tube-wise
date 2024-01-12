import { Routes, Route} from 'react-router-dom'

// Page components
import TubeIndex from './components/TubeIndex'
import Login from './components/Login'
import Register from './components/Register'


function App() {

  return (
    <>
    <main>
      <Routes>
        <Route path='/' element={<TubeIndex />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        </Routes>
    </main>
    </>
  )
}

export default App;
