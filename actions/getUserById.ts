"use server";
import dbConnect from '@/libs/dbConfig';
import User from '@/models/userModel';

export default async function getUserById(id: any) {
  await dbConnect();
  const user = await User.findById(id);
  console.log(user)
  return user;
}
