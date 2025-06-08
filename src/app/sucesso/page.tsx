'use client';

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SucessoContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">
        {status === "approved" ? "Compra aprovada 🎉" : "Compra pendente 🤔"}
      </h1>
    </div>
  );
}

export default function SucessoPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Carregando...</div>}>
      <SucessoContent />
    </Suspense>
  );
}

export const dynamic = "force-dynamic";
