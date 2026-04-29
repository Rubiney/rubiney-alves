import { NextRequest, NextResponse } from 'next/server'

// Etapa 3: aqui entra a integração com Google Sheets
export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    console.log('Nova resposta:', data) // temporário até Etapa 3
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
