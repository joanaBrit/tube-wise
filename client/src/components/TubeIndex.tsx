import { useState, useEffect } from 'react'
import axios from 'axios'


interface apiProps {
  name: string
  statusSeverityDescreption: string
  modified: string
}


export default function TubeIndex() {

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


