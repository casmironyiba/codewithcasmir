
import User from '@/models/userModel'

export default async function getUserByUsername(email:string) {
  const user = await User.findOne({email})
    return  user
  };
