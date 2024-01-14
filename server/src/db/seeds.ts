import mongoose from 'mongoose'

const seedDataBase = async () => {
  try {
    await mongoose.connect('') //process.env.CONNECTION_STRING
    console.log('👋 Database connection estabilish.')

    // Close database connection
    await mongoose.connection.close()
    console.log('⛔ Database connection Closed.')
  } catch (error) {
    // Close database connection
    await mongoose.connection.close()
    console.error('⛔ Database connection Closed.', error)
  }
}
seedDataBase()