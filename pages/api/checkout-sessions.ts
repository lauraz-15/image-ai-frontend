// pages/api/checkout-sessions.ts
import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  const { plan, workspaceId } = req.body;

  const priceMap: Record<string, string> = {
    pro: process.env.STRIPE_PRICE_PRO!,
    unlimited: process.env.STRIPE_PRICE_UNLIMITED!,
  };

  if (!priceMap[plan]) {
    return res.status(400).json({ error: "Invalid plan selected" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceMap[plan],
          quantity: 1,
        },
      ],
      mode: "subscription",
      metadata: {
        workspaceId,
        plan,
      },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout?cancelled=true`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
