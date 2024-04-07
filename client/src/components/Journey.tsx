import React, { useEffect, useState } from "react"
import { isLoggedIn } from "../utils/Auth"
import { Navigate } from "react-router-dom"
import axios from "axios"
import Tubelines, { ApiProps, TubeLineStatus } from "./TubeLines"

// MUI
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
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

  const [journeyLines, setJourneyLines] = useState<Array<ApiProps>>([])
  const [from, setFrom] = useState<string>()
  const [to, setTo] = useState<string>()


  useEffect(() => {
    async function getJourneyData() {
      try {
        if (from && to) {
          const { data } = await axios.get(`https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}`)
          setJourneyLines(data.lines)
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
      <FromDropdown value={from} setValue={setFrom} />
      <ToDropdown value={to} setValue={setTo} />
      {/* logic for journey data */}
      <div className="journey">
        <h1>Plan your journey</h1>
        <div className="journey-lines-container">
          {journeyLines && journeyLines.map((line) =>
            <TubeLineStatus lineInfo={line} />
          )}
          <div>
            <button>Plan</button>
          </div>
        </div>
      </div>
    </>
  )
}

function FromDropdown(props: { value: string, setValue: (v: string) => void }) {
  const options: Option[] = NAPTAN_IDS

  return (
    <FormControl>
      <InputLabel id="from-label">From</InputLabel>
      <Select
        labelId="from-label"
        id="from-select"
        value={props.value}
        label="From"
        onChange={(e: SelectChangeEvent) => props.setValue(e.target.value)}
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

function ToDropdown(props: { value: string, setValue: (v: string) => void }) {
  const options = NAPTAN_IDS

  return (
    <FormControl>
      <InputLabel id="to-label">To</InputLabel>
      <Select
        labelId="to-label"
        id="to-select"
        value={props.value}
        label="To"
        onChange={(e: SelectChangeEvent) => props.setValue(e.target.value)}
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

