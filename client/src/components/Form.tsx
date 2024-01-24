import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorResponse, LoginResponse } from '../../../common/types'
import { setToken } from '../utils/Auth'



// Interface
interface FormProps {
  title: string
  fields: string[]
  request: (data: any) => Promise<{ data: ErrorResponse | LoginResponse }>
  redirect: string
  onLoad?: () => Promise<{ data: any }>
}


const Form: React.FC<FormProps> = (props: FormProps) => {
  const { fields, request, redirect, onLoad } = props

  //* Variables
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)


  //* On component render
  useEffect(() => {
    const fillFormField = async () => {
      try {
        const { data } = await onLoad()
        setFormData(data)
      } catch (error) {
        console.error(error)
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
      setLoading(true)
      const { data } = await request(formData)
      if ('error' in data) {

      } else if ('token' in data) {
        const hasNoError = data === undefined || data.doNotNavigate === false

        if (data.token) {
          const tokenName = 'userID'
          setToken(tokenName, data.token)
        }

        // Check if redirect
        if (redirect && hasNoError) {
          navigate(redirect)
        }
      }

      // Reset form data after successful submission
      setFormData({})

      // Set successful message
      setMessage('Form submitted successfuly!')

    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Internal Error'
      setError(errorMessage)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {fields.map((field) => (
          <input
            key={field}
            name={field}
            id={field}
            type={field}
            onChange={handleChange}
          />
        ))}
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit" disabled={loading}>
        {message}
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default Form