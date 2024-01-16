import { userModel } from "../models/user"
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const secureRoute = async (req: Request, res: Response, next: NextFunction) => {
  console.log('Hit secure endpoint')

  try {
    // Check to see if the user has sent an authorization
    console.log(req.headers.authorization)
    if (!req.headers.authorization) throw new Error('Missing authorization header')

    // Remove the 'Bearer' from the beggining of the token
    const token = req.headers.authorization. replace('Bearer', '')
    // Use a jwt method to verify the validation
    const { sub: userId } = jwt.verify(token, process.env.SECRET)
    // If the token is valid
    const foundUser = await userModel.findById(userId)
    // If they don't exist
    if (!foundUser) {
      throw new Error('User not found')
    }
    // If they exist
    next()
  } catch (error) {
    console.log(error)
    res.status(401). json({ error: 'Unauthorized'})
  }
}