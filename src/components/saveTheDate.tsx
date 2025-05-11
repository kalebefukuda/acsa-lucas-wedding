'use client';

export default function SaveTheDate() {
  const events = [
    { label: "O COMEÇO!", date: "10 April 2018" },
    { label: "O PEDIDO!", date: "10 April 2018" },
    { label: "O CASAMENTO!", date: "10 April 2026" },
  ];

  return (
    <section className="bg-[#f5f4e6] py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-[12rem]">
      {/* Lado esquerdo - título */}
      <div className="text-[116px] text-black font-castoro text-center md:text-left leading-tight">
        <p>SAVE</p>
        <p>THE</p>
        <p>DATE<span className="text-[var(--color-primary)]">!</span></p>
      </div>

      {/* Linha do tempo */}
      <div className="flex gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center w-[200px]"
          >
            <div className="w-40 h-110 bg-black rounded-full"></div>
            <div className="w-px h-20 bg-black mt-1"></div>
            <p className="text-sm mt-2 text-black">{event.date}</p>
            <p className="text-2xl font-castoro mt-3 text-black uppercase break-words">
              {event.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
