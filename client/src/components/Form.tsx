import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorResponse, LoginResponse, RegisterUserResponse } from '../../../common/types'

import { Button, TextField } from '@mui/material'



// Interface
interface FormProps {
  title: string
  fields: Array<{ type: string, name: string, label: string }>
  request: (data: any) => Promise<{ data: ErrorResponse | LoginResponse | RegisterUserResponse }>
  redirect: string
  onLoad?: () => Promise<{ data: any }>
  processResponse: (data) => void
}

const Form: React.FC<FormProps> = (props: FormProps) => {
  const { title, fields, request, redirect, onLoad, processResponse } = props

  //* Variables
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  //* On component render
  useEffect(() => {
    const fillFormField = async () => {

      if (!onLoad) return
      try {
        const { data } = await onLoad()
        setFormData(data)
      } catch (error) {
        setError(String(error))
      }
    }
    console.log('On Load executed')
    fillFormField()
  }, [])

  //* Handle functions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // when an error has appeared and a user starts typing, remove the old error
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data } = await request(formData)
      if ('error' in data) {
        setError(data.error)
      } else {
        processResponse(data)

        // Check if redirect
        if (redirect) {
          navigate(redirect)
        }
      }
      // Set successful message
      setMessage('Form submitted successfuly!')
    } catch (error) {
      // console.log('Full error object: ', error)
      // console.log('Front-end error: ', error)
      // console.log('Error response: ', error.response)
      const errorMessage = error.response?.data?.error || 'Internal Error'
      console.log(errorMessage)
      setError(errorMessage)
    }
  }

  return (
    <section className='form-login-register'>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {fields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              onChange={handleChange} />
          ))}
        </div>
        {error && <div style={{ color: 'red', marginTop: '1.5rem' }}>{error}</div>}
        {message}
        <Button variant="outlined" size="medium" type="submit" style={{ margin: '2rem' }}>
          {title}
        </Button>
      </form>
    </section>
  )
}


export default Form