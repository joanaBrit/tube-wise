import { Request, Response } from 'express'
import { userModel, IUser } from '../models/user'
import { BadRequest, UnprocessableEntity, Conflict } from '../utils/errors'
import { errorHandler } from '../utils/errorMiddleware'

//* Register route

export const registerUser = async (req: Request, res: Response) => {
  try {
    // If user don't fill all fields
    const requiredFields = ['username', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!req.body[field]) {
        // throw new Error(`Missing required field: ${field}`)
        throw new BadRequest(`Missing required field: ${field}`)
      }
    }

    if (req.body.password.length < 6) {
      throw new UnprocessableEntity('The password must be at least 6 characters long.')
    }

    if (req.body.password !== req.body.passwordConfirmation) {
      throw new UnprocessableEntity('Passwords don\'t match.')
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
        throw new Conflict(`User with the same ${duplicatedField} already exists.`)
    }

    // Create the user if all required fields are presented.
    const user = await userModel.create(req.body)
    console.log('Created user.', user)

    res.status(201).json({ user: 'Your account has been successfully created.' })

  } catch (error) {
    console.error(error)
    // Error messages
    errorHandler(error, res)
    // res.status(422).json({ error: error.message || 'Unprocessable Entity' })
  }
}