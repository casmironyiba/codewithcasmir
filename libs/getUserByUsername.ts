//
// import User from '@/models/userModel'
//
// export default async function getUserByUsername(email:string) {
//   const user = await User.findOne({email})
//     return  user
//   };
//
import User from '@/models/userModel';

export default async function getUserByUsername(q: any) {
  const regex = new RegExp(q, 'i');
  try {
    const users = await User.find({ username: { $regex: regex } });
    return users

  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('FailEd to fetch Users');
  }
};
