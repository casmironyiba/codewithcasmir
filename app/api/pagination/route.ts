
// /pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/libs/dbConfig';
import User from '@/models/userModel'; // Assuming you have a User model defined

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { page = 1, limit = 10 } = req.query;
  const pageNumber = parseInt(page as string);
  const limitNumber = parseInt(limit as string);
  const skip = (pageNumber - 1) * limitNumber;

  try {
    const users = await User.find().skip(skip).limit(limitNumber);
    const totalUsers = await User.countDocuments();

    res.status(200).json({
      users,
      totalPages: Math.ceil(totalUsers / limitNumber),
      currentPage: pageNumber,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
