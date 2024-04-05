import { useEffect, useState } from "react"
import { isLoggedIn } from "../utils/Auth"
import { Navigate } from "react-router-dom"
import axios from "axios"

// MUI
import { FormControl, InputLabel, MenuItem } from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select"

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


function Journey() {

  const [journey, setJourney] = useState()

  useEffect(() => {
    async function getJourneyData() {
      try {
        const { data } = await axios.get('https://api.tfl.gov.uk/Journey/JourneyResults/{from}/to/{to}')
        setJourney(data)
        console.log(data)
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
    </>
  )
}

function FromDropdown() {

  const [fromStation, setTFromChange] = useState()

  const handleFromChange = (event) => { //(event: SelectChangeEvent)
    setTFromChange(event.target.value)
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
        <MenuItem value={'tube lines'}>{'tubeline'}</MenuItem>
      </Select>
    </FormControl>
  )
}

function ToDropdown() {

  const [toStation, setToChange] = useState()

  const handleToChange = (event) => {
    setToChange(event.target.value)
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
        <MenuItem value={'tube lines'}>{'tubeline'}</MenuItem>
      </Select>
    </FormControl>
  )
}


export default Journey

