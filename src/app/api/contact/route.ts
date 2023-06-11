import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_EMAIL_PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    transporter.verify((err: any, success: any) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const bodyRequest = await req.json();

  const mailData = {
    from: "khaiciller@gmail.com",
    to: "khainciller@gmail.com",
    subject: `Message From ${bodyRequest.name} <${bodyRequest.email}>`,
    text: bodyRequest.message,
    html: `<div>${bodyRequest.message}</div>`,
  };

  const sendMail = new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  let info;
  try {
    info = await sendMail;
  } catch (error) {
    info = error;
  }

  return NextResponse.json({
    message: "success send message",
    info,
  });
}
