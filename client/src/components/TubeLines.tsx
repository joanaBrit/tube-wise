import { Navigate } from "react-router-dom"
import { isLoggedIn } from "../utils/Auth"
import React, { useState, useEffect } from "react"
import Popover from "@mui/material/Popover"
import axios from "axios"

// MUI
import { Button, Typography } from "@mui/material"



interface ApiProps {
  name: string
  lineStatuses: Array<{ statusSeverityDescription: string, reason: string }>
  modified: string
}


function TubeLineStatus({ lineInfo }: { lineInfo: ApiProps }) {
  //* Popover
  const [popover, setPopover] = useState<HTMLButtonElement>(null)
  const open = Boolean(popover)
  const id = open ? `popover- ${lineInfo.name}` : undefined

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopover(event.currentTarget)
  }

  const handleClose = () => {
    setPopover(null)
  }

  return (
    <div key={lineInfo.name}>
      <Button variant="text" aria-describedby={id} onClick={lineInfo.lineStatuses[0].reason ? handleClick : null} >
        {lineInfo.name}: {lineInfo.lineStatuses[0].statusSeverityDescription}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={popover}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2, color: "rgba(0, 0, 0, 0.87)" }}>
          {lineInfo.lineStatuses[0].reason}
        </Typography>
      </Popover>
    </div>
  )
}


function Tubelines() {
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
    <div className="lines">
      <h1>Tube Lines</h1>
      <div className="tube-line-container" >
        {tube && tube.map((lineInfo, index) => (
          <TubeLineStatus key={index} lineInfo={lineInfo} />
        ))}
      </div>
    </div>
  )
}



export default Tubelines