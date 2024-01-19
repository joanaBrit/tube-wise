import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { setToken } from 'typescript'

// Utils

// Interface form
interface FormProps {
  // title: string
  // request: boolean
  fields: string[]
  // redirect: string
  onLoad: () => Promise<{ data: any }>
}


const Form: React.FC<FormProps> = ({ fields,  onLoad }) => {

  //* Location variables
  const navigate = useNavigate()

  //* State
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState('')


  //* On component render
  useEffect(() => {
    async function fillFormField() {
      try {
        const { data } = await onLoad()
        setFormData(data)
      } catch (error) {
        console.error(error)
        setErrors(errors)
      }
    }


    console.log('On Load executed')
    fillFormField()

  }, [])

  //* Handle functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors('')
  }

  // const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   try {
  //     const { data } = await request(formData)
  //     if (data.token) {
  //       setToken(data.token)
  //     }
  //   } catch (error) {
  //     setErrors(errorMessage)
  //   }
  // }

  return (
    <form onSubmit={() => { }}>
      <div>
        {fields.map(field =>
          <input
            key={field}
            name={field}
            id={field}
            type={field}
            onChange={handleChange}
          />)}

      </div>
      {/* <button onSubmit={handleSubmit}></button> */}
    </form>

  )
}

export default Form