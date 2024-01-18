import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Utils

// Interface form
interface FormProps {
  title: string
  request: boolean
  fields: boolean[]
  redirect: string
  onLoad: () => void
}


const Form: React.FC<FormProps> = ({ title, request, fields, redirect, onLoad }) => {

//* Location variables
const navigate = useNavigate()

//* State
const [ formData, setFormData ] = useState((fields))
const [ errors, setErrors ] = useState('')


//* On component render
useEffect(() => {
  async function fillFormField(){
  
  // try {
  //   const { data } = await onLoad()
  //   setFormData(data)
  // } catch (error) {
  //   console.error(error)
  //   setErrors(error)
  // }
}
// if (onload){
//   console.log('On Load executed')
//     fillFormField()
// }
}, [onLoad])

  return (
    <>
    
    </>
  )
}

export default Form