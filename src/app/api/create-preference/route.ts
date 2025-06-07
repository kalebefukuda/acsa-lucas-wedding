import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { title, price } = body;

    try {
        const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [
                    {
                        title,
                        quantity: 1,
                        currency_id: "BRL",
                        unit_price: Number(price),
                    },
                ],
                back_urls: {
                    success: "https://wedding-lucas-acsa.vercel.app/sucesso",
                    failure: "https://wedding-lucas-acsa.vercel.app/erro",
                    pending: "https://wedding-lucas-acsa.vercel.app/pendente"
                },
                auto_return: "approved"
            }),
        });

        const data = await response.json();
        return NextResponse.json({ url: data.init_point });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao criar preferência" }, { status: 500 });
    }
}
