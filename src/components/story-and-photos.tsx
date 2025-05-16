'use client';
import Image from 'next/image';

export default function StoryAndPhotos() {
  return (
    <section className="min-h-[90vh] bg-[#f5f4e6] flex flex-col lg:flex-row items-stretch justify-center mx-10">
      {/* Texto - esquerda */}
      <div className="flex flex-col w-1/2 text-black font-castoro justify-center items-start px-20 border-r border-black">
        <div className="flex flex-col h-full justify-center">
          <h2 className="text-7xl leading-tight">
            Uma História <br />
            escrita por{" "}
            <span
              className="italic text-[90px]"
              style={{
                WebkitTextStroke: "1px black",
                color: "#FEE987",
              }}
            >
              DEUS
            </span>
          </h2>
          <p className="mt-10 font-kodchasan text-base max-w-md">
            Lucas e Acsa se encontraram por acaso e descobriram o propósito
            juntos. Hoje, celebram um amor guiado por Deus e cheio de significado.
          </p>
          <button className="mt-10 flex items-center gap-2 font-kodchasan cursor-pointer">
            Ler mais <span>→</span>
          </button>
        </div>
      </div>

      {/* Fotos - direita */}
      <div className="flex-1 flex flex-col gap-6 items-center py-10">
        <h2 className="text-5xl font-castoro text-black">Fotos</h2>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/foto-1.jpg"
            alt="Buquê"
            width={160}
            height={120}
            className="rounded-xl object-cover"
          />
          <Image
            src="/images/foto-2.jpg"
            alt="Casal de costas"
            width={160}
            height={120}
            className="rounded-xl object-cover"
          />
          <Image
            src="/images/foto-3.jpg"
            alt="Casal abraçado"
            width={340}
            height={160}
            className="col-span-2 rounded-xl object-cover"
          />
        </div>
        <button className="mt-4 px-6 py-2 bg-[var(--color-primary)] text-black rounded-full font-kodchasan flex items-center gap-2 hover:scale-[1.02] transition">
          Ver mais <span>→</span>
        </button>
      </div>
    </section>
  );
}
