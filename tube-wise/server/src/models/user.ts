import mongoose, { Document, Schema } from 'mongoose'
// import { hashSync } from "bcrypt-ts"
import * as bcrypt from "bcrypt-ts"



// Create the interface
export interface IUser extends Document {
  username: string
  email: string
  password: string
  _passwordConfirmation?: string
}

// Create schema
const userSchema = new Schema<IUser>({
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
userSchema
.virtual('passwordConfirmation')
.set(function (this: IUser, fieldValue: string){
this._passwordConfirmation = fieldValue
})

// Pre validation
userSchema
.pre('validate', function (next) {
  // Validate when the password is not the same
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    // Invalidate the request when the password don't match
    this.invalidate('passwordConfirmation', 'Passwords do not match.')
  }
  next()
})

// Pre save
userSchema
.pre('save', function (next) {
  // Check if the password has been modified
  if (this.isModified('password')) {
    // Hash the password using bcrypt
    this.password = bcrypt.hashSync(this.password, 10)
  }
  next()
})

// Custom method to a schema
userSchema.methods.validatePassword = function (plainTextPassword) {
  let encodePassword = Buffer.from(plainTextPassword, 'utf-8')
  // Convert the Buffer to a string
  let encodePasswordString = encodePassword.toString('utf-8')
  return bcrypt.compareSync(encodePasswordString, this.password)
}

//* Model
export const userModel = mongoose.model<IUser>('User', userSchema)