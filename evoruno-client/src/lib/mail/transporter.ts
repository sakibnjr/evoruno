import nodemailer from 'nodemailer';

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_APP_PASSWORD;

if (!user || !pass) {
  if (process.env.NODE_ENV === 'production') {
    console.warn('⚠️ GMAIL_USER or GMAIL_APP_PASSWORD is not set in environment variables.');
  }
}

// Singleton transporter configured for Gmail SMTP
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user || 'demo@evoruno.com',
    pass: pass || 'demo-password',
  },
});

export async function verifySmtpConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('Gmail SMTP verification error:', error);
    return false;
  }
}
