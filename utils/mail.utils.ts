import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  debug: true,
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


