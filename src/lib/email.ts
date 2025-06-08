import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

interface SendContactEmailParams {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function sendContactEmail({
  firstName,
  lastName,
  email,
  message,
}: SendContactEmailParams) {
  if (!import.meta.env.RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY environment variable');
  }

  if (!import.meta.env.CONTACT_FORM_TO_EMAIL) {
    throw new Error('Missing CONTACT_FORM_TO_EMAIL environment variable');
  }

  if (!import.meta.env.RESEND_FROM_EMAIL) {
    throw new Error('Missing RESEND_FROM_EMAIL environment variable');
  }

  const { data, error } = await resend.emails.send({
    from: import.meta.env.RESEND_FROM_EMAIL,
    to: import.meta.env.CONTACT_FORM_TO_EMAIL,
    subject: `New Contact Form Message from ${firstName} ${lastName}`,
    text: `
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
    `,
    replyTo: email,
  });

  if (error) {
    throw error;
  }

  return data;
}
