"use client";
import Image from "next/image";

export default function LocationAndSuggestions() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Rua+Espanha,+67,+Blumenau+-+SC";

  return (
    <section className="min-h-screen bg-[#f5f4e6] grid grid-cols-1 lg:grid-cols-[40%_60%] border-t-2  border-black">
      {/* Localização */}
      <div className="relative w-full border-r-2 border-black flex flex-col justify-between">
        <div>
          <div className="bg-[var(--color-primary)] py-10 px-6 text-black  font-castoro text-3xl font-bold border-b border-black w-full">
            <div className="w-full h-full flex items-center justify-center">
              LOCALIZAÇÃO
            </div>
          </div>

          <h2
            className="mt-20 ml-15 text-[65px] italic font-castoro text-[var(--color-primary)]"
            style={{ WebkitTextStroke: "1px black" }}
          >
            Castelo Suíço
          </h2>

          <div className="mt-6 ml-18 text-[26px] font-kodchasan text-black leading-relaxed">
            <p>07 de fevereiro de 2026</p>
            <p>
              A realizar-se às 17h{" "}
              <span
                className="text-[var(--color-primary)] text-[26px] font-bold"
                style={{ WebkitTextStroke: "0.5px black" }}
              >
                !
              </span>
            </p>
            <p>Rua Espanha, 67</p>
            <p>Blumenau - SC</p>
          </div>

          <div className="border-t-2 border-black w-[25%] my-8"></div>

          <div className="mt-15 ml-14">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[320px] h-[70px] px-8 py-3 bg-[var(--color-primary)] text-black border border-black rounded-[18px] font-kodchasan text-base flex items-center justify-center gap-2 hover:scale-[1.02] transition cursor-pointer"
            >
              Abrir no maps <span>→</span>
            </a>
          </div>
        </div>

        <div className="relative h-auto">
          <Image
            src="/images/castelo.svg"
            alt="Ilustração Torre"
            width={350}
            height={350}
            className="absolute bottom-[-2px] right-[-70px] object-fill"
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
              {[1, 2, 3].map((_,index) => (
                <div key={index} className="flex items-center gap-6 justify-center mr-5">
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
        <div className="text-xl text-right font-castoro text-black mr-3">
          Salão
        </div>
      </div>
    </section>
  );
}
