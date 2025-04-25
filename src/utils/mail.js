import nodmailer from "nodemailer";
import {config} from "dotenv"
config();

export const sendMAiler = nodmailer.createTransport({
  port: 465,
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  secure: true,
});
