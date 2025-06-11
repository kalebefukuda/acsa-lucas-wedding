'use client';

export default function SaveTheDate() {
  const events = [
    { label: "O COMEÇO!", date: "10 April 2018" },
    { label: "O PEDIDO!", date: "10 April 2018" },
    { label: "O CASAMENTO!", date: "10 April 2026" },
  ];

  return (
    <section className="w-full bg-[#f5f4e6] py-32 px-6 flex flex-col lg:flex-row items-center justify-center gap-[6rem]">
      {/* Title */}
      <div className="text-[90px] md:text-[126px] lg:mb-12 md:mb-0 text-black font-castoro  lg:text-left leading-tight">
        <p>SAVE</p>
        <p>THE</p>
        <p>DATE<span className="text-[var(--color-primary)] text-outline">!</span></p>
      </div>

      {/* Events */}
      <div className="flex flex-col lg:flex-row gap-12 md:gap-20 ml-0 md:ml-10">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center w-[200px]"
          >
            <div className="w-35 h-65 md:w-55 md:h-140 bg-black lg:rounded-full md:rounded-full rounded-[60px]"></div>
            <div className="w-[2px] h-8 md:h-25 bg-black mt-1"></div>
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
