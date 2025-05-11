"use client";
import Image from "next/image";

export default function ScrollingBanner() {
  const items = Array.from({ length: 10 });

  return (
    <div className="w-full h-[80px] overflow-hidden bg-[var(--color-primary)] border-y border-black py-4">
      <div className="flex animate-scroll whitespace-nowrap w-max h-full gap-15">
        {[...items, ...items].map((_, idx) => (
          <span key={idx} className="flex items-center h-full gap-25">
            <Image
              src="/images/black-tangerina.svg"
              width={30}
              height={35}
              className="object-contain"
              alt="Tangerina"
            />
            <Image
              src="/images/acsa-lucas-black.svg"
              width={40}
              height={40}
              className="object-contain w-auto h-full"
              alt="Acsa & Lucas"
            />
            <Image
              src="/images/black-tangerina.svg"
              width={30}
              height={35}
              className="object-contain"
              alt="Tangerina"
            />
            <Image
              src="/images/la-monograma.png"
              width={40}
              height={40}
              className="object-contain w-auto h-full"
              alt="Monograma LA"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
