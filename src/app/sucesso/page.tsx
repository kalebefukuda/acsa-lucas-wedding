"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SucessoPage() {
  const searchParams = useSearchParams()
  const transactionId = searchParams.get("transaction_id")
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    async function validatePayment() {
      const res = await fetch(`/api/validate?transaction_id=${transactionId}`)
      const data = await res.json()
      setIsValid(data.valid)
    }

    if (transactionId) validatePayment()
  }, [transactionId])

  if (!isValid) return <p>Validando pagamento...</p>

  return <h1>Obrigado pelo presente! ❤️</h1>
}
