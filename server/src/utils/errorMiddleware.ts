import { NextFunction, Response } from 'express'
import  { CustomError } from './errors'


export const errorHandler = (
  err: Error,
  // req: Request,
  res: Response,
  // next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ error: err.message })
  } else {
    console.error(err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}