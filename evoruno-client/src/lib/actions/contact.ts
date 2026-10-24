'use server';

import { contactSchema } from '@/lib/schemas/contact';
import { transporter } from '@/lib/mail/transporter';
import { generateInquiryEmailHtml, generateClientConfirmationEmailHtml } from '@/lib/mail/templates';

export interface ActionResponse {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
}

export async function submitContactForm(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawData: Record<string, unknown> = {};
  formData.forEach((value, key) => {
    rawData[key] = value;
  });

  // 1. Zod Validation
  const validationResult = contactSchema.safeParse(rawData);
  if (!validationResult.success) {
    return {
      success: false,
      message: 'Please review and correct the highlighted fields.',
      fieldErrors: validationResult.error.flatten().fieldErrors,
    };
  }

  const validData = validationResult.data;

  // 2. Honeypot Anti-Spam Check
  if (validData.honeypot && validData.honeypot.length > 0) {
    // Silently return success to deter bots
    return { success: true, message: 'Your message has been sent successfully.' };
  }

  // 3. Dispatch via Gmail SMTP
  try {
    const sender = process.env.GMAIL_USER || 'evoruno.official@gmail.com';
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || sender;

    // Send inquiry to Evoruno Team
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      await transporter.sendMail({
        from: `"Evoruno Inquiries" <${sender}>`,
        to: receiver,
        replyTo: validData.email,
        subject: `[Project Inquiry] ${validData.name} — ${validData.service.toUpperCase()}`,
        text: `Client Name: ${validData.name}\nEmail: ${validData.email}\nService: ${validData.service}\nBudget: ${validData.budget || 'Not specified'}\n\nMessage:\n${validData.message}`,
        html: generateInquiryEmailHtml(validData),
      });

      // Send confirmation to prospect
      try {
        await transporter.sendMail({
          from: `"Evoruno" <${sender}>`,
          to: validData.email,
          subject: 'Thank you for contacting Evoruno!',
          html: generateClientConfirmationEmailHtml(validData.name),
        });
      } catch (confirmError) {
        console.warn('Auto-confirmation receipt failed to send:', confirmError);
      }
    } else {
      console.log('📬 [Development Simulation] Inbound message received:', validData);
    }

    return {
      success: true,
      message: 'Thank you! Your project inquiry has been received. An engineer will review your requirements and reach out within 24 hours.',
    };
  } catch (error) {
    console.error('Gmail SMTP Dispatch Error:', error);
    return {
      success: false,
      message: 'Unable to deliver message due to a mail server connection issue. Please contact us directly at contact@evoruno.com.',
    };
  }
}
