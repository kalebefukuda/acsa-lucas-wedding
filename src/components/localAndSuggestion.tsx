"use client";
import Image from "next/image";

export default function LocationAndSuggestions() {
  return (
    <section className="min-h-screen bg-[#f5f4e6] grid grid-cols-1 lg:grid-cols-[40%_60%] border-t-2  border-black">
      {/* Localização */}
      <div className="relative w-full border-r-2 border-black flex flex-col justify-between">
        <div>
          <div className="bg-[var(--color-primary)] py-10 px-6 text-black  font-castoro text-3xl font-bold border-b border-black w-full flex justify-center">
            LOCALIZAÇÃO
          </div>

          <ul className="mt-10 text-lg leading-relaxed font-kodchasan list-disc list-inside">
            <li>29 de junho de 2024</li>
            <li>A realizar-se às 15h</li>
            <li>Cerimônia e recepção - Ville La Rochelle</li>
            <li>Estrada Municipal do bairro Caioçara 1100</li>
            <li>Bairro Caioçara | Jarinu - SP</li>
          </ul>
        </div>

        <div className="mt-10 w-32 h-auto self-end">
          <Image
            src="/images/castelo.svg"
            alt="Ilustração Torre"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Sugestões */}
      <div className="flex flex-col px-20 py-10 gap-6">
        <h2
          className="text-[75px] italic font-castoro text-[var(--color-primary)]"
          style={{ WebkitTextStroke: "1px black" }}
        >
          SUGESTÕES
        </h2>

        <div className="text-xl font-castoro ml-1 text-black">Hospedagem</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((col) => (
            <div
              key={col}
              className="flex flex-col gap-8 border border-black rounded-xl py-6 w-[400px]"
            >
              {[1, 2, 3].map((item) => (
                <div className="flex items-center gap-6 justify-center mr-5">
                  <div className="w-26 h-28 bg-black rounded-md"></div>
                  <div className="flex flex-col justify-center text-sm text-black mr-10">
                    <span className="text-start">Pousada São José</span>
                    <span className="text-start">5km</span>
                    <button className="text-xs mt-3 px-3 py-2 w-[120px] mx-auto border border-black bg-[var(--color-primary)] rounded-lg font-kodchasan hover:scale-105 transition cursor-pointer">
                      Ver no maps
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="text-xl text-right font-castoro text-black mr-3">Salão</div>
      </div>
    </section>
  );
}
