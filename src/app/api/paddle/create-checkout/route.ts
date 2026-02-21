import { NextResponse } from "next/server"

export async function POST() {
  try {
    const response = await fetch("https://sandbox-api.paddle.com/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.PADDLE_API_KEY}`
      },
      body: JSON.stringify({
        items: [
          {
            price_id: "pri_01kj01ra6r68sqz2tz2vrja54g", // BURAYA KENDİ PRICE ID'Nİ KOY
            quantity: 1
          }
        ]
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.log("PADDLE ERROR:", data)
      return NextResponse.json({ error: data }, { status: 400 })
    }

    return NextResponse.json({
      checkoutUrl: data.data.checkout.url
    })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 })
  }
}