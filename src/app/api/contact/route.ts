import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_EMAIL_PASSWORD,
    },
  });

  const bodyRequest = await req.json();

  const mailContent = {
    from: "khaiciller@gmail.com",
    to: "khainciller@gmail.com",
    subject: `Message From ${bodyRequest.name} <${bodyRequest.email}>`,
    text: bodyRequest.message,
    html: `<div>${bodyRequest.message}</div>`,
  };

  let info = await transporter.sendMail(mailContent);
  
  return NextResponse.json({ message: "success send message", messageId: info.messageId });
}
