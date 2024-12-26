import { sendForgotPasswordEmail } from '@/helpers/mailer';
import { NextRequest, NextResponse } from "next/server";
import generateResetToken from '@/helpers/generateResetToken';
import User from '@/models/userModel';
import dbConnect from '@/libs/dbConfig';

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    const user = await User.findOne({ email });

    if (user) {
      console.log(user);
      // Generate a reset token (you may have your own implementation)
      const resetToken = generateResetToken();

      // Call the sendForgotPasswordEmail function
      await sendForgotPasswordEmail(email, resetToken);

      return NextResponse.json({
        message: 'Password reset email sent successfully.',
        success: true
      });

    } else {
      return NextResponse.json({
        message: "No user found",
        success: false
      })
    }

  } catch (error: any) {
    console.error('Error sending password reset email:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


