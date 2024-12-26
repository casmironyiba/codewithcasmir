import dbConnect from "@/libs/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import getUsers from '@/libs/getUsers'

export async function GET() {

  try {
    await dbConnect();
    const users = await User.find({});

    return NextResponse.json(users);

  } catch (error) {
    NextResponse.json({ error: 'Failed to fetch users' });

  }
};


