import { NextResponse } from "next/server";
import { RESTAURANT } from "@/lib/constants";

interface CateringInquiry {
  name: string;
  company?: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  serviceStyle: string;
  venue: string;
  dietaryNotes?: string;
  hearAbout?: string;
}

function isValidInquiry(body: unknown): body is CateringInquiry {
  if (!body || typeof body !== "object") return false;
  const o = body as Record<string, unknown>;
  return (
    typeof o.name === "string" &&
    o.name.trim().length > 0 &&
    typeof o.email === "string" &&
    o.email.includes("@") &&
    typeof o.phone === "string" &&
    o.phone.trim().length > 0 &&
    typeof o.eventType === "string" &&
    o.eventType.trim().length > 0 &&
    typeof o.eventDate === "string" &&
    o.eventDate.trim().length > 0 &&
    typeof o.guestCount === "string" &&
    o.guestCount.trim().length > 0 &&
    typeof o.serviceStyle === "string" &&
    o.serviceStyle.trim().length > 0 &&
    typeof o.venue === "string" &&
    o.venue.trim().length > 0
  );
}

function buildEmailBody(data: CateringInquiry): string {
  return [
    "New Catering Inquiry — Istanbul Mediterranean 2",
    "================================================",
    "",
    `Name:          ${data.name}`,
    `Company:       ${data.company || "—"}`,
    `Email:         ${data.email}`,
    `Phone:         ${data.phone}`,
    "",
    `Event Type:    ${data.eventType}`,
    `Event Date:    ${data.eventDate}`,
    `Guest Count:   ${data.guestCount}`,
    `Service Style: ${data.serviceStyle}`,
    `Venue:         ${data.venue}`,
    "",
    `Dietary Notes: ${data.dietaryNotes || "—"}`,
    `Heard About:   ${data.hearAbout || "—"}`,
    "",
    "—",
    "Submitted via istanbul2.com/catering",
  ].join("\n");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidInquiry(body)) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const emailBody = buildEmailBody(body);
  const subject = encodeURIComponent(
    `Catering Inquiry: ${body.eventType} — ${body.guestCount} guests on ${body.eventDate}`
  );
  const mailtoBody = encodeURIComponent(emailBody);

  // Resend integration — set RESEND_API_KEY + CATERING_NOTIFY_EMAIL in env to enable email delivery
  const resendKey = process.env.RESEND_API_KEY;
  // Supports a comma-separated list, e.g. "a@x.com, b@y.com"
  const notifyEmails = (
    process.env.CATERING_NOTIFY_EMAIL ?? RESTAURANT.cateringEmail
  )
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ??
    "Istanbul 2 Catering <catering@istanbul2.com>";

  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: notifyEmails,
          reply_to: body.email,
          subject: decodeURIComponent(subject),
          text: emailBody,
        }),
      });

      if (!res.ok) {
        console.error("[catering] Resend error:", await res.text());
        return NextResponse.json(
          {
            error: "Email delivery failed. Please call us directly.",
            mailto: `mailto:${RESTAURANT.cateringEmail}?subject=${subject}&body=${mailtoBody}`,
          },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("[catering] Resend fetch error:", err);
      return NextResponse.json(
        {
          error: "Email delivery failed. Please call us directly.",
          mailto: `mailto:${RESTAURANT.cateringEmail}?subject=${subject}&body=${mailtoBody}`,
        },
        { status: 502 }
      );
    }
  } else {
    // No email provider configured — log inquiry server-side for manual follow-up
    console.log("[catering inquiry]\n" + emailBody);
  }

  return NextResponse.json({ success: true });
}
