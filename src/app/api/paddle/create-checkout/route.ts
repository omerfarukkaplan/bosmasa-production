import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch(
      "https://sandbox-api.paddle.com/checkout-sessions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PADDLE_API_KEY}`,
        },
        body: JSON.stringify({
          items: [
            {
              price_id: "pri_01khzzfmttd6jasqkxw2zmz8cw",
              quantity: 1,
            },
          ],
          success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
        }),
      }
    );

    const data = await response.json();

    if (!data?.data?.url) {
      return NextResponse.json(
        { error: "Checkout URL not returned", debug: data },
        { status: 400 }
      );
    }

    return NextResponse.json({ url: data.data.url });
  } catch (err) {
    return NextResponse.json({ error: "Server error", details: err }, { status: 500 });
  }
}