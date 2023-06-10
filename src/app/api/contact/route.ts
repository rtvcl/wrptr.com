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
    from: "local@local.com",
    to: "khainciller@gmail.com",
    subject: `Message From ${bodyRequest.name}`,
    text: bodyRequest.message,
    html: `<div>${bodyRequest.message}</div>`,
  };

  let test;
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) {
      console.log(err);
      test = info;
    } else {
      console.log(info);
      test = info;
    }
  });

  return NextResponse.json({ message: "success send message",test,mailData });
}
