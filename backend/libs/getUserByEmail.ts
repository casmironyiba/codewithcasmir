import User from '@/models/userModel'

export default async function getUserByEmail(email:string) {
  const user = await User.findOne({email})
    return  user
  };
