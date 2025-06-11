"use client";
import Image from "next/image";

const suggestions = {
  hospedagem: [
    {
      name: "Hotel Glória",
      distancia: "5km",
      mapsUrl: "https://g.co/kgs/tKJX6Zs",
      image: "/sugestoes/hotel-gloria.webp",
    },
    {
      name: "Hotel Himmemblau",
      distancia: "6km",
      mapsUrl: "https://g.co/kgs/KmFXRgm",
      image: "/sugestoes/hotel-himmelblau.jpg",
    },
    {
      name: "Hotel Budget Ibis",
      distancia: "6km",
      mapsUrl: "https://g.co/kgs/aUWCTzA",
      image: "/sugestoes/hotel-ibis.jpg",
    },
  ],
  salao: [
    {
      name: "Espaço Margarete",
      distancia: "1km",
      mapsUrl: "https://g.co/kgs/N9pyB5K",
      image: "/sugestoes/espaco-margarete.webp",
    },
    {
      name: "Point da Beleza",
      distancia: "1km",
      mapsUrl: "https://maps.app.goo.gl/2yn8D2gXuSHDHpd36",
      image: "/sugestoes/point-beleza.jpeg",
    },
    {
      name: "Point da Beleza",
      distancia: "2km",
      mapsUrl: "https://maps.app.goo.gl/2yn8D2gXuSHDHpd36",
      image: "/sugestoes/point-beleza.jpeg",
    },
  ],
};

export default function LocationAndSuggestions() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Rua+Espanha,+67,+Blumenau+-+SC";

  return (
    <section className="min-h-screen bg-[#f5f4e6] flex flex-col lg:grid lg:grid-cols-[40%_60%] border-t-2 border-black">
      {/* Localização */}
      <div className="relative w-full lg:border-r-2 border-black flex flex-col justify-between min-h-[65vh] lg:min-h-0">
        <div>
          <div className="bg-[var(--color-primary)] py-8 lg:py-10 px-4 lg:px-6 text-black font-castoro text-2xl lg:text-3xl font-bold border-b border-black w-full">
            <div className="w-full h-full flex items-center justify-center">
              LOCALIZAÇÃO
            </div>
          </div>

          <h2
            className="mt-10 mx-6 px-6 lg:mt-20 text-left lg:ml-15 text-[45px] lg:text-[65px] italic font-castoro text-[var(--color-primary)]"
            style={{ WebkitTextStroke: "1px black" }}
          >
            Castelo Suíço
          </h2>

          <div className="mt-6 mx-6 text-left lg:ml-18 text-[22px] lg:text-[26px] font-kodchasan text-black leading-relaxed px-6">
            <p>07 de fevereiro de 2026</p>
            <p>
              A realizar-se às 17h{" "}
              <span
                className="text-[var(--color-primary)] text-[22px] lg:text-[26px] font-bold"
                style={{ WebkitTextStroke: "0.5px black" }}
              >
                !
              </span>
            </p>
            <p>Rua Espanha, 67</p>
            <p>Blumenau - SC</p>
          </div>

          <div className="border-t-2 border-black w-[25%] my-8 ml-7 lg:ml-14"></div>

          <div className="flex lg:flex items-start lg:justify-start lg:ml-14 ml-6 pl-6">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] lg:text-[17px] w-[340px] lg:w-[320px] h-[55px] lg:h-[70px] px-4 lg:px-8 py-3 bg-[var(--color-primary)] text-black border border-black rounded-[18px] font-kodchasan text-base flex items-center justify-center gap-2 hover:scale-[1.02] transition cursor-pointer"
            >
              Abrir no maps <span>→</span>
            </a>
            <div className="flex lg:relative h-full lg:h-auto w-[490px] lg:mb-10 items-end">
              <Image
                src="/images/castelo.svg"
                alt="Ilustração Torre"
                width={350}
                height={350}
                className="flex justify-end lg:relative lg:top-10 lg:left-[90px] w-[270px] lg:bottom-[-200] lg:w-[330px] object-fill lg:object-fill"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sugestões */}
      <div className="flex flex-col px-4 lg:px-25 py-7 gap-6 min-h-[100vh] lg:min-h-0 border-t-2 lg:border-t-0 border-black">
        <h2
          className="text-[55px] lg:text-[75px] italic font-castoro text-[var(--color-primary)] text-center lg:text-left "
          style={{ WebkitTextStroke: "1px black" }}
        >
          SUGESTÕES
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-6 w-full">
          {/* Hospedagem */}
          <div className="flex lg:flex-1 flex-col justify-center items-center w-full lg:text-left lg:items-start">
            <h3 className="text-xl font-castoro text-black text-center mb-4">
              Hospedagem
            </h3>
            <div className="flex flex-col gap-10 border border-black rounded-xl lg:p-10 w-[23rem] p-6">
              {suggestions.hospedagem.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 justify-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={90}
                    height={90}
                    className="w-25 h-25 bg-black rounded-md object-cover"
                  />
                  <div className="flex flex-col text-sm text-black">
                    <span>{item.name}</span>
                    <span>{item.distancia}</span>
                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs mt-2 px-3 py-1 border border-black bg-[var(--color-primary)] rounded-lg font-kodchasan hover:scale-105 transition cursor-pointer text-center w-[120px]"
                    >
                      Ver no maps
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Salão */}
          <div className="flex lg:flex-1 flex-col justify-center items-center w-full lg:text-left lg:items-start ">
            <h3 className="text-xl font-castoro text-black text-center mb-4">
              Salão
            </h3>
            <div className="flex flex-col gap-10 border border-black rounded-xl lg:p-10 w-[23rem] p-6">
              {suggestions.salao.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 justify-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={90}
                    height={90}
                    className="w-25 h-25 bg-black rounded-md object-cover"
                  />
                  <div className="flex flex-col text-sm text-black">
                    <span>{item.name}</span>
                    <span>{item.distancia}</span>
                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs mt-2 px-3 py-1 border border-black bg-[var(--color-primary)] rounded-lg font-kodchasan hover:scale-105 transition cursor-pointer text-center w-[120px]"
                    >
                      Ver no maps
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
