import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const transactionId = searchParams.get("transaction_id")

  if (!transactionId) {
    return NextResponse.json({ valid: false, error: "Transaction ID missing" }, { status: 400 })
  }

  const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${transactionId}`, {
    headers: {
      Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN!}`,
    },
  })

  if (!mpResponse.ok) {
    return NextResponse.json({ valid: false, error: "Erro ao validar pagamento" }, { status: 500 })
  }

  const payment = await mpResponse.json()

  const isValid = payment.status === "approved"

  return NextResponse.json({ valid: isValid })
}
