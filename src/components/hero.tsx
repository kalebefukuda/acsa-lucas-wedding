"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Presentes", href: "#presentes" },
  { label: "Sobre nós", href: "#about" },
  { label: "Local", href: "#local" },
  { label: "Dicas e Sugestões", href: "#dicas" },
  { label: "Fotos", href: "#fotos" },
];

export default function Hero() {
  const weddingDate = new Date("2026-02-07T17:00:00-03:00");

  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const total = weddingDate.getTime() - now.getTime();
      if (total <= 0) return;

      const totalMinutes = Math.floor(total / 1000 / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;
      const totalDays = Math.floor(totalHours / 24);

      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;

      setTimeLeft({ months, days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f4e6] border-b border-black/10 text-black">
        {/* Menu Mobile */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
              className="p-2 hover:bg-black/5 rounded-md transition-colors text-black"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center mr-8">
              <Image
                src="/images/LA_BRASÃO 03.png"
                width={40}
                height={40}
                alt="Brasão Acsa & Lucas"
              />
            </div>
          </div>

          {/* Dropdown Menu Mobile */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#f5f4e6] border-t border-black/10">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-base font-medium hover:bg-black/5 transition-colors border-b border-black/5 last:border-b-0 text-black font-kodchasan"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center justify-center py-6 tracking-wide">
          <div className="flex gap-10">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="group overflow-hidden text-black font-kodchasan font-medium"
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0">
                  {label}
                </span>
                <span className="block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="font-kodchasan font-medium min-h-screen flex flex-col items-center justify-between bg-[#f5f4e6] text-black">
        {/* Monograma */}
        <div className="flex items-center justify-center flex-1">
          <Image
            src="/images/monograma-hero.svg"
            width={900}
            height={400}
            alt="Monograma"
            className="w-[400px] lg:w-full h-full"
          />
        </div>

        {/* Local e Data */}
        <div className="mb-5">
          <p className="text-lg text-center uppercase font-castoro tracking-wider">
            07 DE FEVEREIRO DE 2026
            <br />
            Blumenau - SC
          </p>
        </div>

        {/* Contagem regressiva */}
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-8 text-center font-castoro mb-12">
          {[
            { label: "MESES", value: timeLeft.months },
            { label: "DIA", value: timeLeft.days },
            { label: "HORAS", value: timeLeft.hours },
            { label: "MINUTOS", value: timeLeft.minutes },
          ].map((item, idx) => (
            <div key={idx}>
              <div
                className="text-[75px] lg:text-[80px] text-[#FEE987]"
                style={{ WebkitTextStroke: "1px black" }}
              >
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm lg:text-lg tracking-widest">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
