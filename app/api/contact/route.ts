import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  contact?: string;
  topic?: string;
  message?: string;
};

function getContactToEmail() {
  return process.env.GUIDE_NOTIFICATION_EMAIL ?? process.env.ADMIN_EMAIL ?? "";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.contact || !payload.message) {
    return NextResponse.json({ error: "Заполните обязательные поля." }, { status: 400 });
  }

  // Connect email delivery server-side with RESEND_API_KEY.
  console.info("Contact request for Viktor Amchislavsky", {
    hasNotificationEmail: Boolean(getContactToEmail()),
    name: payload.name,
    contact: payload.contact,
    topic: payload.topic,
    message: payload.message
  });

  return NextResponse.json({ ok: true });
}
