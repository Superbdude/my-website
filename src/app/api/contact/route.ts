import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          error:
            'Email service is not configured on the server. Please set RESEND_API_KEY.',
        },
        { status: 500 }
      );
    }

    // Send contact notification email to you
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'oguntaderasaq30@gmail.com',
      subject: `Website contact from ${name}`,
      html: `
        <h2>New Message from Your Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Oguntade Razak</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    const message = error instanceof Error ? error.message : 'Failed to send email';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
