"use client";

export default function SaveTheDate() {
  const events = [
    {
      label: "O COMEÇO!",
      date: "01 Novembro 2024",
      src: "/images/o-inicio.svg",
      alt: "Nosso começo",
    },
    {
      label: "O PEDIDO!",
      date: "01 Março 2025",
      src: "/images/o-pedido.svg",
      alt: "O pedido",
    },
    {
      label: "O CASAMENTO!",
      date: "07 Fevereiro 2026",
      src: "/images/o-casamento.svg",
      alt: "O casamento",
    },
  ];

  return (
    <section className="w-full bg-white py-32 px-6 flex flex-col lg:flex-row items-center justify-center gap-[6rem]">
      {/* Title */}
      <div className="text-[90px] md:text-[126px] lg:mb-12 md:mb-0 text-black font-castoro lg:text-left leading-tight">
        <p>SAVE</p>
        <p>THE</p>
        <p>
          DATE
          <span className="text-[var(--color-primary)] text-outline">!</span>
        </p>
      </div>

      {/* Events */}
      <div className="flex flex-col lg:flex-row gap-12 md:gap-20 ml-0 md:ml-10">
        {events.map((e, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center w-[200px]"
          >
            <div className="group transform-gpu will-change-transform transition-transform duration-500 ease-out hover:scale-105 motion-reduce:transition-none">
              <div
                aria-label={e.alt}
                role="img"
                className="w-[200px] h-[520px] md:w-[220px] md:h-[560px]
             overflow-hidden rounded-[9999px] bg-cover bg-center
             shadow-[0_10px_25px_rgba(0,0,0,0.25)]
             transition-all duration-500 ease-out
             hover:scale-105 hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
                style={{ backgroundImage: `url(${e.src})` }}
              />
            </div>

            <div className="w-[2px] h-8 md:h-24 bg-black mt-1" />

            <p className="text-sm mt-2 text-black">{e.date}</p>
            <p className="text-2xl font-castoro mt-3 text-black uppercase break-words">
              {e.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
