import { Request, Response } from 'express'
import { userModel, IUser } from '../models/user'
import { UnprocessableEntity, NotFound, BadRequest } from '../utils/errors'
import { errorHandler } from '../utils/errorMiddleware'
import jwt from 'jsonwebtoken'



//* Login route

export const loginUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  try {
    // User must choose one of the fields email or username to entry
    if (!(email || username)) {
      // Log details
      console.log('req.body.email: ', email)
      console.log('req.body.username: ', username)
      throw new BadRequest('Please provide either an email or an username.')
    }

    // search the database for the user
    const userToLogin: IUser | null = await userModel.findOne({
      $or: [
        { email: req.body.email },
        { username: req.body.username }
      ]
    })

    // if the email and the username doesn't match any users
    if (!userToLogin) throw new NotFound('User not found')

    // if they don't match we need to check the hash password and throw an error
    if (!userToLogin.validatePassword(password)) {
      throw new UnprocessableEntity('Password invalid')
    }

    //  if they match
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, { expiresIn: '7d' })
    res.json({ message: `Welcome back, ${userToLogin.username}!`, token: token })

    console.log('Password validation: ', userToLogin.validatePassword(password))

  } catch (error) {
    console.log(error)
    // Error messages
    errorHandler(error, res)
  }
}