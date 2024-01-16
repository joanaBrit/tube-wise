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

export const loginUser =async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  try {
    // search the database for the user
    const userToLogin = await userModel.findOne({ email: email, username: username})

    // if the email and the username doesn't match any users
    if(!userToLogin) throw new Error('User not found')
    
    // if they don't match we need to check the hash password and throw an error
    if (!userToLogin.validatePassword(password)) {
      throw new Error('Password invalid')
    }

    //  if they match
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, { expires: '7d'})
    res.json({ message: `Welcome back, ${userToLogin.username}!`, token: token })
    
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized'})
  }
}