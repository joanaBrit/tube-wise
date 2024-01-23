import { Routes, Route } from 'react-router-dom'

// Page components
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import TubeIndex from './components/LineIndex'
import Form from './components/Form'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/form' element={
          <Form
            fields={['username', 'email', 'password']}
            request={FormData}
            redirect='/success'
            onLoad={async () => ({ data: {} }) }
          />} />
        <Route path='/tube' element={<TubeIndex />} />
      </Routes>
    </>
  )
}

export default App;
