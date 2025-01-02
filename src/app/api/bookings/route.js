import { NextResponse } from 'next/server';

const BACKEND_URL = 'http://localhost:5000/api/bookings';

export async function POST(req) {
  const data = await req.json();
  const res = await fetch(BACKEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 400 });
  }

  const result = await res.json();
  return NextResponse.json(result);
}

export async function GET() {
  const res = await fetch(BACKEND_URL);
  const bookings = await res.json();
  return NextResponse.json(bookings);
}
