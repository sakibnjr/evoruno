import { ContactInput } from '@/lib/schemas/contact';

export function generateInquiryEmailHtml(data: ContactInput) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #080B16; color: #F5F7FF; padding: 24px; margin: 0; }
          .card { background-color: #101629; border: 1px solid #1e284a; border-radius: 12px; padding: 28px; max-width: 600px; margin: 0 auto; box-shadow: 0 8px 30px rgba(0,0,0,0.4); }
          .header { border-bottom: 1px solid #1e284a; padding-bottom: 16px; margin-bottom: 24px; }
          .logo { font-size: 22px; font-weight: 800; color: #4F7CFF; letter-spacing: 1.5px; }
          .title { font-size: 18px; font-weight: 600; color: #F5F7FF; margin: 8px 0 0; }
          .field { margin-bottom: 18px; }
          .label { font-size: 11px; text-transform: uppercase; color: #A7B0C5; letter-spacing: 0.8px; font-weight: 600; }
          .value { font-size: 15px; color: #F5F7FF; margin-top: 4px; line-height: 1.5; }
          .badge { display: inline-block; background-color: rgba(79, 124, 255, 0.15); color: #4F7CFF; border: 1px solid rgba(79, 124, 255, 0.4); padding: 4px 10px; border-radius: 6px; font-size: 13px; font-weight: 600; text-transform: capitalize; }
          .message-box { background: #080B16; border: 1px solid #1e284a; border-radius: 8px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #E2E8F0; }
          .footer { font-size: 12px; color: #64748B; margin-top: 28px; text-align: center; border-top: 1px solid #1e284a; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <div class="logo">EVORUNO</div>
            <div class="title">New Client Project Inquiry</div>
          </div>
          <div class="field">
            <div class="label">Client Name</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${data.email}" style="color: #4F7CFF; text-decoration: none;">${data.email}</a></div>
          </div>
          ${
            data.company
              ? `
          <div class="field">
            <div class="label">Company / Business</div>
            <div class="value">${data.company}</div>
          </div>`
              : ''
          }
          <div class="field">
            <div class="label">Service Required</div>
            <div class="value"><span class="badge">${data.service}</span></div>
          </div>
          ${
            data.budget
              ? `
          <div class="field">
            <div class="label">Estimated Budget</div>
            <div class="value">${data.budget}</div>
          </div>`
              : ''
          }
          <div class="field">
            <div class="label">Project Description</div>
            <div class="message-box">${data.message}</div>
          </div>
          <div class="footer">
            Sent automatically from Evoruno Contact Form. Reply directly to this email to contact ${data.name}.
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateClientConfirmationEmailHtml(clientName: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #080B16; color: #F5F7FF; padding: 24px; margin: 0; }
          .card { background-color: #101629; border: 1px solid #1e284a; border-radius: 12px; padding: 28px; max-width: 600px; margin: 0 auto; }
          .logo { font-size: 22px; font-weight: 800; color: #4F7CFF; letter-spacing: 1.5px; }
          h2 { color: #F5F7FF; margin-top: 16px; font-size: 20px; }
          p { color: #A7B0C5; font-size: 15px; line-height: 1.6; }
          .highlight { color: #F5F7FF; font-weight: 600; }
          .footer { font-size: 12px; color: #64748B; margin-top: 24px; border-top: 1px solid #1e284a; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="logo">EVORUNO</div>
          <h2>We received your message, ${clientName}!</h2>
          <p>Thank you for reaching out to <span class="highlight">Evoruno</span>. Our engineering and strategy team is reviewing your project details.</p>
          <p>We typically review inquiries and get back to you within <span class="highlight">24 business hours</span> with insights, initial questions, or next steps for a discovery discussion.</p>
          <p style="margin-top: 24px;">Best regards,<br><strong style="color: #F5F7FF;">The Evoruno Team</strong><br><span style="font-size: 13px; color: #4F7CFF;">Evolving Beyond Limits.</span></p>
          <div class="footer">
            Evoruno — High-performing websites, mobile applications, and SEO solutions.
          </div>
        </div>
      </body>
    </html>
  `;
}
