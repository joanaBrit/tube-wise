import express from 'express'
import mongoose from 'mongoose'
import router from './config/routes'

import dotenv from 'dotenv'

dotenv.config()

const app = express()

//* Parse JSON body
app.use(express.json())

//* Specific routes
app.use(router)

//* Route not found
app.use((req, res) => { return res.status(404).json({ message: 'Not found' }) })

const startServer = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('🌱 Database connection estabilish.')
    // Listen
    app.listen(process.env.PORT, () => { console.log(`🚀 LISTENING on port ${process.env.PORT}`) })
  } catch (error) {
    console.error('❌ Something went wrong when starting the server.', error)
  }
}
startServer()
