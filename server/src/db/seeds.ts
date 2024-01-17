import mongoose from 'mongoose'
import { userModel } from '../models/user'

const seedDataBase = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('🚀 Database connection estabilish.')

    // Delete all the documents from all user collections
    const { deletedCount: usersDeleted } = await userModel.deleteMany()
    console.log(`❌ Deleted ${usersDeleted} documents from the users collection.`)

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