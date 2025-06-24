'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function StoryAndPhotos() {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-stretch justify-center mx-6 lg:mx-10">
      {/* Texto - esquerda */}
      <div
        className="flex flex-col w-full lg:w-1/2 text-black font-castoro justify-center items-start px-6 lg:px-20 border-b lg:border-b-0 lg:border-r border-black py-15"
        id="about"
      >
        <div className="flex flex-col h-full justify-center">
          <h2 className="text-5xl lg:text-8xl leading-tight">
            Uma História <br />
            escrita por{' '}
            <span
              className="italic text-[70px] lg:text-[100px]"
              style={{
                WebkitTextStroke: '1px black',
                color: '#FEE987',
              }}
            >
              DEUS
            </span>
          </h2>
          <p className="mt-10 font-kodchasan text-base lg:text-lg max-w-md">
            Lucas e Acsa se encontraram por acaso e descobriram o propósito juntos.
            Hoje, celebram um amor guiado por Deus e cheio de significado.
          </p>
          <Link href="/story" className="text-base mt-10 flex items-center gap-2 font-kodchasan cursor-pointer">
            Ler mais <span>→</span>
          </Link>
        </div>
      </div>

      {/* Fotos - direita */}
      <div
        className="w-full lg:flex-1 flex flex-col gap-6 items-center py-20 px-6 mt-6"
        id="fotos"
      >
        <div className="max-w-[550px] w-full">
          <Image
            src="/images/foto-section.svg"
            alt="Seção de fotos do casamento"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <div className="w-full mt-6 flex justify-end">
            <Link href="/photos" className="w-[300px] h-[60px] px-8 py-3 bg-[var(--color-primary)] text-black border border-black rounded-[18px] font-kodchasan text-base flex items-center justify-center gap-2 hover:scale-[1.02] transition cursor-pointer">
              Ver mais <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
