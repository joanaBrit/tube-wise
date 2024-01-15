import express from 'express'
import { registerUser } from '../controllers/users'

const router = express.Router()

//* Users
router
.route('/register')
.post(registerUser)


export default router