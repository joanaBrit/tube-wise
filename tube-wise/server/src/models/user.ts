import mongoose, { Document, Schema } from 'mongoose'


// Create the interface
export interface IUser extends Document {
  username: string
  email: string
  password: string

}

// Create schema
const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true, maxlength: 20 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }

)

//* Virtual Fiels
// password confirmation


// Pre validation


// Pre save

// Model
export const userModel = mongoose.model<IUser>('User', UserSchema)