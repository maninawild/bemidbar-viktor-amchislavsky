import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  contact?: string;
  topic?: string;
  message?: string;
};

function getContactToEmail() {
  return process.env.CONTACT_TO_EMAIL ?? ["vicam2001", "mail", "ru"].join("@");
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.contact || !payload.message) {
    return NextResponse.json({ error: "Заполните обязательные поля." }, { status: 400 });
  }

  // TODO: Connect email delivery before production launch.
  // Recommended Vercel setup:
  // 1. Add RESEND_API_KEY and CONTACT_TO_EMAIL=vicam2001@mail.ru in Vercel env vars.
  // 2. Install `resend`.
  // 3. Send an email here with the validated payload.
  console.info("Contact request for Viktor Amchislavsky", {
    to: getContactToEmail(),
    name: payload.name,
    contact: payload.contact,
    topic: payload.topic,
    message: payload.message
  });

  return NextResponse.json({ ok: true });
}
