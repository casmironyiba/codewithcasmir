
import User from '@/models/userModel'
import bcrypt from 'bcryptjs';

export default async function checkPassword(email: string, password: string) {
  const user = await User.findOne({ email })
  const comparedPassword = await bcrypt.compare(user.password, password)
  return { user, comparedPassword }
};
