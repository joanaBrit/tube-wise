import { useState, useEffect } from 'react'
import axios from 'axios'
import { isLoggedIn } from '../utils/Auth'
import { Navigate } from 'react-router-dom'


interface apiProps {
  name: string
  statusSeverityDescreption: string
  modified: string
}


const TubeIndex = () => {

  //* State
  const [tube, setTube] = useState<apiProps[]>()

  //* Initial Render / fetching the data
  useEffect(() => {
    async function getTubeData() {
      try {
        const { data } = await axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status')
        setTube(data)
        console.log(data)
      } catch (error) {
        console.error('Something Went Wrong Please Try Again', error)
      }
    }
    getTubeData()
  }, [])

  if (!isLoggedIn()) return <Navigate to='/login' />
  
  return (
    <>
      {tube && tube.length > 0 ? (
        <h3>{tube[0].name}</h3>

      ) : (
        <div>spinner</div>
      )}
    </>
  )
}

export default TubeIndex
