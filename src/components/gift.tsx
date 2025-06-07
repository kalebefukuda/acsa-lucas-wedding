"use client";
import { useState, useRef } from "react";
import { gifts } from "@/lib/gifts";
import { Menu, X } from "lucide-react";

const categories = ["Cozinha", "Lavanderia", "Sala", "Quarto", "Valor Livre!"];

export default function Gift() {
  const [selectedCategory, setSelectedCategory] = useState("Cozinha");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className="min-h-screen bg-[#f5f4e6] px-6 md:px-10 py-16"
      id="presentes"
    >
      {/* Título e categorias */}
      <div className="flex lg:flex-row justify-between items-center mb-10 px-6 lg:px-25">
        <h2
          className="text-[38px] lg:text-6xl font-castoro text-black"
          style={{ WebkitTextStroke: "1px black" }}
        >
          PRESENTES<span className="text-[var(--color-primary)]">!</span>
        </h2>

        {/* Desktop - Botões */}
        <div className="hidden lg:flex flex-wrap gap-6 mt-6 lg:mt-0 font-kodchasan text-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`group relative text-black transition duration-150 cursor-pointer ${
                selectedCategory === cat ? "font-bold" : ""
              }`}
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0">
                {cat}
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile - Menu hambúrguer */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-5 py-2 text-black bg-[var(--color-primary)] rounded-lg font-kodchasan text-lg cursor-pointer text-center"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={20} />}
            {selectedCategory}
          </button>

          {/* Menu dropdown */}
          {isMenuOpen && (
            <div
              className={`absolute top-full left-0 right-0 mt-2 bg-[var(--background)] text-black rounded-lg shadow-lg z-10 transform transition-all duration-300 origin-top ${
                isMenuOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 pointer-events-none"
              }`}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 font-kodchasan text-[16px] hover:bg-[#ffeea0] transition duration-150 cursor-pointer ${
                    selectedCategory === cat ? "font-bold bg-[#ffeea0]" : ""
                  } ${cat === categories[0] ? "rounded-t-lg" : ""} ${
                    cat === categories[categories.length - 1]
                      ? "rounded-b-lg"
                      : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grid de presentes */}
      {selectedCategory !== "Valor Livre!" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 px-6 lg:px-20">
          {gifts
            .filter((gift) => gift.category === selectedCategory)
            .map((gift) => (
              <div
                key={gift.id}
                className="rounded-xl bg-[#f5f4e6] overflow-hidden cursor-pointer"
                style={{
                  boxShadow: "0px 4px 20px -2px rgba(0, 0, 0, 0.38)",
                }}
              >
                {/* Imagem */}
                <div className="w-full px-2 lg:px-8 py-4 lg:py-6 flex justify-center items-center">
                  <div className="w-[120px] h-[80px] lg:w-full lg:h-[200px] bg-[#f5f4e6] flex items-center justify-center">
                    <img
                      src={gift.imageUrl || "/placeholder.svg"}
                      alt={gift.name}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                </div>

                {/* Conteúdo textual */}
                <div className="mb-6 lg:mb-10 text-center px-2">
                  <p className="font-kodchasan text-xs lg:text-base font-semibold text-black tracking-wide">
                    {gift.name}
                  </p>
                  <p className="font-kodchasan text-sm lg:text-base font-bold text-black mt-2 lg:mt-3">
                    R$ {gift.price.toFixed(2)}
                  </p>

                  {!gift.isAvailable && (
                    <button
                      disabled
                      className="mt-2 lg:mt-3 px-3 lg:px-4 py-1 lg:py-2 rounded-full border border-gray-400 text-gray-500 italic text-xs lg:text-sm cursor-default"
                    >
                      Comprado
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10 px-6">
          <h3 className="text-2xl lg:text-3xl font-castoro mb-4 text-black text-center">
            Contribua com qualquer valor
          </h3>
          <input
            type="number"
            placeholder="Digite o valor em R$"
            className="w-full max-w-[300px] h-[50px] rounded-lg border border-black px-4 mb-4 text-lg font-kodchasan"
          />
          <button className="px-6 py-3 bg-[var(--color-primary)] text-black border border-black rounded-full font-kodchasan text-base hover:scale-[1.02] transition">
            Doar via PIX
          </button>
        </div>
      )}
    </section>
  );
}
