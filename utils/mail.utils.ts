import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  secure: true
} as SMTPTransport.Options);

type SendEmailDto = {
  sender: Mail.Address;
  receipients: Mail.Address[];
  subject: string;
  message: string;
};
export const sendEmail = async (dto: SendEmailDto) => {
  const { sender, receipients, subject, message } = dto;

  return await transporter.sendMail({
    from: sender,
    to: receipients,
    subject: subject,
    html: message,
  });
};


