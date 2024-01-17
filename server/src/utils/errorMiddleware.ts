import { Response } from 'express'
import  { CustomError } from './errors'


export const errorHandler = (
  err: Error,
  res: Response,
) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ error: err.message })
  } else {
    console.error(err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}