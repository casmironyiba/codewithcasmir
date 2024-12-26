import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';


const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: process.env.SENDGRID_API_KEY,
  },
});

const sendForgotPasswordEmail = async (to: string, token: string) => {
  const mailOptions = {
    from: 'your_email@example.com',
    to,
    subject: 'Reset Your Password',
    text: `Click the following link to reset your password: ${token}`,
  };

  await transporter.sendMail(mailOptions);
};

export { sendForgotPasswordEmail };

