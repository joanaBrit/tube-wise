import { userModel } from "../models/user"
import { Request, Response, NextFunction } from 'express'

export const secureRoute = async (req: Request, res: Response, next: NextFunction) => {
  console.log('Hit secure endpoint')

  try {
    
    
  } catch (error) {
    console.log(error)
    res.status(401). json({ error: 'Unauthorized'})
  }
}