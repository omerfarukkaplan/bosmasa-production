import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch("https://sandbox-api.paddle.com/transactions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PADDLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            price_id: "pri_0lkhzzfmttd6jasgkxw2zmz8cw",
            quantity: 1,
          },
        ],
        checkout: {
          success_url: "https://followops.app/dashboard",
          cancel_url: "https://followops.app/pricing",
        },
      }),
    });

    const data = await response.json();

    return NextResponse.json({
      debug_from_paddle: data
    });

  } catch (error: any) {
    return NextResponse.json({
      error_message: error.message
    }, { status: 500 });
  }
}