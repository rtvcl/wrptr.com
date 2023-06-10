import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASS,
    },
    secure: true,
  });

  const bodyRequest = await req.json();

  const mailData = {
    from: "khainciller@gmail.com",
    to: "khainciller@gmail.com",
    subject: `Message From ${bodyRequest.name}`,
    text: bodyRequest.message,
    html: `<div>${bodyRequest.message}</div>`,
  };

  const mailresponse = transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  return NextResponse.json({ message: "success send message",mailresponse,mailData });
}
