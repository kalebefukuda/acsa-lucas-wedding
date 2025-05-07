"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Presentes", href: "#presentes" },
  { label: "Sobre nós", href: "#sobre-nos" },
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

    updateCountdown(); // run once immediately
    const interval = setInterval(updateCountdown, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="font-kodchasan font-medium min-h-screen flex flex-col items-center justify-between pt-10 pb-16 bg-[#f5f4e6] text-black">
      <div>
        <nav className="tracking-wide flex gap-10">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="group overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0">
                {label}
              </span>
              <span className="block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>

      <div>
        <Image
          src="/images/monograma-hero.svg"
          width={1000}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div>
        <p className="text-lg text-center uppercase font-castoro tracking-wider">
          07 DE FEVEREIRO DE 2026
          <br />
          Blumenau - SC
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8 text-center font-castoro">
        {[
          { label: "MESES", value: timeLeft.months },
          { label: "DIA", value: timeLeft.days },
          { label: "HORAS", value: timeLeft.hours },
          { label: "MINUTOS", value: timeLeft.minutes },
        ].map((item, idx) => (
          <div key={idx}>
            <div
              className="text-[80px] text-[#FEE987]"
              style={{
                WebkitTextStroke: "1px black",
                color: "#FEE987",
              }}
            >
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-lg tracking-widest">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
