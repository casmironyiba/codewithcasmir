
import dbConnect from '@/libs/dbConfig'; // Utility to connect to MongoDB
import User from '@/models/userModel';

export default async function GET(req, res) {
  await dbConnect(); // Connect to MongoDB

  const { name } = req.query;
  console.log(name)

  try {
    if (name) {
      const regex = new RegExp(name, 'i');
      const users = await User.find({ name: regex });
      res.status(200).json(users);
    } else {
      res.status(400).json({ error: 'Name parameter is required' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}
