import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, error: "All fields are required." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    req.log.error("RESEND_API_KEY is not configured");
    res.status(500).json({ success: false, error: "Email service not configured." });
    return;
  }

  const resend = new Resend(apiKey);

  let data, error;
  try {
    ({ data, error } = await resend.emails.send({
      from: "Hensley Legal <noreply@keystoneoffshoreinc.online>",
      to: "theodorelegal@attorneytwilliamhensley.com",
      replyTo: email,
      subject: `New Enquiry: ${subject}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
          <div style="background: #1a1a2e; padding: 24px 32px; border-bottom: 3px solid #c9a84c;">
            <h1 style="color: #c9a84c; margin: 0; font-size: 22px; letter-spacing: 1px;">HENSLEY <em>Legal</em></h1>
            <p style="color: #aaa; margin: 4px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">New Client Enquiry</p>
          </div>
          <div style="padding: 32px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 120px; text-transform: uppercase; letter-spacing: 1px;">From</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #1a1a2e;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Area</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1a1a2e;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</p>
              <div style="background: white; border-left: 3px solid #c9a84c; padding: 16px 20px; color: #333; line-height: 1.7; border-radius: 2px;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #1a1a2e; text-align: center;">
            <p style="color: #666; font-size: 11px; margin: 0;">Submitted via attorneytwilliamhensley.com — Regulated by the SRA</p>
          </div>
        </div>
      `,
    }));
  } catch (err) {
    req.log.error({ err }, "Unexpected error calling Resend API");
    res.status(500).json({ success: false, error: "Failed to send enquiry due to an unexpected error. Please try again." });
    return;
  }

  if (error) {
    req.log.error({ error }, "Resend API rejected the email");
    res.status(500).json({ success: false, error: error.message || "Failed to send enquiry. Please try again." });
    return;
  }

  req.log.info({ id: data?.id }, "Enquiry email sent successfully");
  res.json({ success: true, message: "Enquiry sent successfully." });
});

export default router;
