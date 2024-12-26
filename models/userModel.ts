import mongoose, { Schema, Document } from "mongoose";
import bcrypt from 'bcryptjs';


export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  isVerfied: boolean;
  role: string;
  forgotPasswordToken: string;
  forgotPasswordTokenExpiry: string;
  verifyToken: string;
  verifyTokenExpiry: string

}

export const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a username"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: 'user',
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
},
  {
    timestamps: true,
  }
)
userSchema.pre<IUser>('save', async function(next) {
  try {
    if (this.isModified('password') || this.isNew) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    };

    next()
  } catch (error: any) {
    next(error)

  }

})

const User = mongoose.models?.users || mongoose.model("users", userSchema);

export default User;
