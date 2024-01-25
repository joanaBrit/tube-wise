import express from 'express'
import { registerUser } from '../controllers/register'
import { loginUser } from '../controllers/login'

const router = express.Router()

//* Users
router.route('/register')
.post(registerUser)

router.route('/login')
.post(loginUser)


export default router