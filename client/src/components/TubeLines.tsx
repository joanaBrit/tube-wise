import { Navigate } from "react-router-dom"
import { isLoggedIn } from "../utils/Auth"
import { useState, useEffect } from "react"
import axios from "axios"

// MUI
import { Button } from "@mui/material"



interface ApiProps {
  name: string
  lineStatuses: Array<{ statusSeverityDescription: string }>
  modified: string
}

const Tubelines = () => {
  //* State
  const [tube, setTube] = useState<ApiProps[]>()

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
    <div>
      <h1>Tube lines</h1>
      <div className="tube-line-container" >
        {tube && tube.map(lineInfo => <Button variant="text" >
          {lineInfo.name}: {lineInfo.lineStatuses[0].statusSeverityDescription}
        </Button>)}
      </div>
    </div>

  )
}


export default Tubelines