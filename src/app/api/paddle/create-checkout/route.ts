import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch("https://sandbox-api.paddle.com/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.PADDLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            price_id: "pri_01khzzfmttd6jasqkxw2zmz8cw",
            quantity: 1,
          },
        ],
        success_url: "https://followops.app/dashboard",
        cancel_url: "https://followops.app/pricing",
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Checkout error" }, { status: 500 });
  }
}