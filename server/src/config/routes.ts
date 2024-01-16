import express from 'express'
import { loginUser, registerUser } from '../controllers/users'


const router = express.Router()

//* Users
router
.route('/register')
.post(registerUser)

router
.route('/login')
.post(loginUser)


export default router