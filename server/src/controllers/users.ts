import { Request, Response } from 'express'
import { userModel } from '../models/user'
import jwt from 'jsonwebtoken'


//* Register route

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.create(req.body)
    console.log('Created user.', user)
    res.status(201).json({ user: 'Hit register route' })
  } catch (error) {
    console.error(error)
    res.status(422).json({ error: 'Unprocessable Entity'})
  }
}


//* Login route