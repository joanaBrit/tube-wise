import { Request, Response } from 'express'
import { userModel, IUser } from '../models/user'
import jwt from 'jsonwebtoken'


//* Register route

export const registerUser = async (req: Request, res: Response) => {
  try {
    // If user don't fill all fields
    const requiredFields = ['username', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!req.body[field]) {
        throw new Error(`Missing required field: ${field}`)
      }
    }

    if (req.body.password.length < 6) {
      throw new Error('The password must be at least 6 characters long.')
    }

    if (req.body.password !== req.body.passwordConfirmation) {
      throw new Error('Passwords don\'t match.')
    }

    // If the user already exists
    const existingUser = await userModel.findOne({
      $or: [
        { email: req.body.email },
        { username: req.body.username }
      ]
    })

    const userInput: IUser = req.body

    if (existingUser) {
      // variable to store the duplicated
      let duplicatedField: string
      // compare the user input with the existing User
      if (userInput.email === existingUser.email) {
        duplicatedField = "email"
      } else {
        duplicatedField = 'username'
      }

      if (duplicatedField)
        throw new Error(`User with the same ${duplicatedField} already exists.`)
    }

    // Create the user if all required fields are presented.
    const user = await userModel.create(req.body)
    console.log('Created user.', user)

    res.status(201).json({ user: 'Hit register route' })

  } catch (error) {
    console.error(error)
    res.status(422).json({ error: error.message || 'Unprocessable Entity' })
  }
}


//* Login route

export const loginUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body

  try {
    // User must choose one of the fields email or username to entry
    if (!(email || username)) {
      // Log details
      console.log('req.body.email: ', email)
      console.log('req.body.username: ', username)
      throw new Error('Please provide either an email or an username.')
    }

    // search the database for the user
    const userToLogin: IUser | null = await userModel.findOne({
      $or: [
        { email: req.body.email },
        { username: req.body.username }
      ]
    })

    // if the email and the username doesn't match any users
    if (!userToLogin) throw new Error('User not found')


    // if they don't match we need to check the hash password and throw an error
    if (!userToLogin.validatePassword(password)) {
      throw new Error('Password invalid')
    }

    //  if they match
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, { expiresIn: '7d' })
    res.json({ message: `Welcome back, ${userToLogin.username}!`, token: token })

    console.log('Password validation: ', userToLogin.validatePassword(password))

  } catch (error) {
    console.log(error)
    // User error messages
    if (error.message === 'Password invalid') {
      return res.status(401).json({ error: 'Invalid Password. Please check your password.' })
    } else if (error.message === 'User not found') {
      return res.status(404).json({ error: 'User not found.' })
    } else {
      return res.status(401).json({ error: 'Unauthorized' })
    }
  }
}