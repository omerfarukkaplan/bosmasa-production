import { NextResponse } from "next/server";

export async function POST() {
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

  return NextResponse.json({
    url: data.data?.url,
  });
}