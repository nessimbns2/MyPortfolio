import { NextResponse } from "next/server"

interface ContactPayload {
  name?: string
  email?: string
  message?: string
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null

  const name = body?.name?.trim() || ""
  const senderEmail = body?.email?.trim() || ""
  const message = body?.message?.trim() || ""

  if (!name || !senderEmail || !message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

  if (!resendApiKey || !toEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please try again later." },
      { status: 500 }
    )
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  })

  const escapedName = escapeHtml(name)
  const escapedEmail = escapeHtml(senderEmail)
  const escapedMessage = escapeHtml(message).replace(/\n/g, "<br/>")

  const text = [
    "New Portfolio Contact Submission",
    "",
    `From: ${name} <${senderEmail}>`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    message,
  ].join("\n")

  const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Portfolio Contact Submission</title>
      </head>
      <body style="margin:0; padding:24px; background:#f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#18181b;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #d4d4d8;">
          <tr>
            <td style="padding:18px 20px; border-bottom:1px solid #e4e4e7; background:#fafafa;">
              <p style="margin:0; font-size:11px; letter-spacing:1.6px; text-transform:uppercase; color:#3f3f46; font-weight:700;">Nessim Portfolio</p>
              <h1 style="margin:8px 0 0; font-size:20px; line-height:1.3; color:#09090b;">New Contact Request</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate; border-spacing:0 10px;">
                <tr>
                  <td style="width:36%; vertical-align:top;">
                    <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1.2px; color:#71717a;">Name</p>
                    <p style="margin:6px 0 0; font-size:15px; color:#111827; font-weight:600;">${escapedName}</p>
                  </td>
                  <td style="width:64%; vertical-align:top;">
                    <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1.2px; color:#71717a;">Email</p>
                    <p style="margin:6px 0 0; font-size:15px; color:#0369a1; font-weight:600;">
                      <a href="mailto:${escapedEmail}" style="color:#0369a1; text-decoration:none;">${escapedEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:2px;">
                    <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1.2px; color:#71717a;">Submitted</p>
                    <p style="margin:6px 0 0; font-size:14px; color:#3f3f46;">${escapeHtml(submittedAt)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 20px 20px;">
              <div style="border:1px solid #d4d4d8; background:#fafafa; padding:14px 16px;">
                <p style="margin:0 0 10px; font-size:11px; text-transform:uppercase; letter-spacing:1.2px; color:#52525b; font-weight:700;">Message</p>
                <p style="margin:0; font-size:14px; line-height:1.65; color:#18181b; white-space:normal;">${escapedMessage}</p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:14px 20px; border-top:1px solid #e4e4e7; background:#fafafa;">
              <p style="margin:0; font-size:12px; color:#71717a;">Reply directly to this email to respond to ${escapedName}.</p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: senderEmail,
      subject: `New portfolio lead: ${name}`,
      text,
      html,
    }),
  })

  if (!resendResponse.ok) {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
