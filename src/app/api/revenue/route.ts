
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { amount } = await req.json();
  const rate = parseFloat(process.env.COMMISSION_RATE);
  const commission = amount * rate;

  return NextResponse.json({
    gross: amount,
    commission,
    net: amount - commission
  });
}
