import { useEffect, useState } from "react"
import { isLoggedIn } from "../utils/Auth"
import { Navigate } from "react-router-dom"
import axios from "axios"

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
    
    </>
  )
}


export default Journey

