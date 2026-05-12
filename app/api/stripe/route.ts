import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

export async function POST(request: Request) {
  const body = await request.json();
  const { items, successUrl, cancelUrl } = body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return new NextResponse(JSON.stringify({ error: "Invalid items" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: items.map((item: any) => ({
      price_data: {
        currency: item.currency || "usd",
        product_data: {
          name: item.name,
          images: item.images || [],
        },
        unit_amount: Math.round(item.unit_amount * 100),
      },
      quantity: item.quantity,
    })),
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return NextResponse.json({ url: session.url });
}
