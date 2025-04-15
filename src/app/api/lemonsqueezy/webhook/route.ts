// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import { handleWebhook } from "@/utils/lemon";
import crypto from "crypto";

export async function POST(request: Request) {
  const payload = await request.json();
  const signature = request.headers.get("x-signature");

  const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Webhook secret is not defined" },
      { status: 500 }
    );
  }
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(JSON.stringify(payload)).digest("hex");

  if (signature !== digest) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  await handleWebhook(payload);
  return NextResponse.json({ success: true });
}
