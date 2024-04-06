import React, { useEffect, useState } from "react"
import { isLoggedIn } from "../utils/Auth"
import { Navigate } from "react-router-dom"
import axios from "axios"

// MUI
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
// import Select, { SelectChangeEvent } from "@mui/material/Select"
import { BluetoothAudioSharp } from "@mui/icons-material"
import { NAPTAN_IDS } from "../constants"

/**
 * Add Journey component to App
 * Have the options for a dropdown menu to select valid tube stations
 * Get the NATPAN ID for a selected dropdown option
 * Allow user to submit journey when two options are selected
 * Construct the TfL API URL to get the journey
 * Parse the response from API to see what tube lines are involved
 * Show if there are any tube lines with disruptions / statuses
 * 
 * UI: Want one form / card, with the section titled "Plan the journey",
 * with two dropdown input controls, with labels "from" and "to", 
 * and a submit button labeled "Submit". After result
 * is fetched from API, then display below the form all the tube lines 
 * involved in the journey, and their corresponding status, reusing components
 * already built for the Tube Line page.
 */

interface Option {
  naptanID: string;
  commonName: string;
}

function Journey() {

  const [journey, setJourney] = useState<Array<Record<string, any>>>()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  

  useEffect(() => {
    async function getJourneyData() {
      try {
        if (from && to) {
          const { data } = await axios.get(`https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}`)
          setJourney(data.lines)
          console.log(data.lines)
        }
      } catch (error) {
        console.error('Something Went Wrong Please Try Again', error)
      }
    }
    getJourneyData()
  }, [])


  if (!isLoggedIn()) return <Navigate to='/login' />

  return (
    <>
      <FromDropdown />
      <ToDropdown />
      {/* logic for journey data */}
      <div className="journey">
        <h1>Plan your journey</h1>
        <div className="journey-lines-container">
          {journey && journey.map((line) => 
            <Journey />
          )}
        </div>
      </div>
    </>
  )
}

function FromDropdown() {
  const options: Option[] = NAPTAN_IDS
  const [fromStation, setFromStation] = useState()

  const handleFromChange = (event) => { //(event: SelectChangeEvent)
    setFromStation(event.target.value)
  }



  return (
    <FormControl>
      <InputLabel id="from-label">From</InputLabel>
      <Select
        labelId="from-label"
        id="from-select"
        value={fromStation}
        label="From"
        onChange={handleFromChange}
      >
        {/* logic for the tube lines */}
        {options.map(option => (
          <MenuItem key={option.naptanID} value={option.commonName}>
            {option.commonName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

function ToDropdown() {
  const options = NAPTAN_IDS
  const [toStation, setToStation] = useState()

  const handleToChange = (event) => {
    setToStation(event.target.value)
  }



  return (
    <FormControl>
      <InputLabel id="to-label">To</InputLabel>
      <Select
        labelId="to-label"
        id="to-select"
        value={toStation}
        label="To"
        onChange={handleToChange}
      >
        {/* logic for the tube lines */}
        {options.map(option => (
          <MenuItem key={option.naptanID} value={option.commonName}>
            {option.commonName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}


export default Journey

