import { NextRequest, NextResponse } from 'next/server'

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbysjph1dfnlbuW0puTqNAvybijPvLwUJBEXwM5mSwYdD8nbe9m5LynMTAcVWDTePy52Xg/exec'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    await fetch(SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
