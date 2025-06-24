export default function Footer() {
    return (
      <footer className="py-6 sm:py-8 lg:py-12 bg-[var(--color-primary)] border-t border-black font-kodchasan">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center">
            <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl leading-relaxed sm:leading-loose">
              "Melhor é serem dois do que um, porque se caírem, um levanta o outro. O cordão de três dobras não se rebenta
              com facilidade."
              <span className="block mt-2 sm:mt-3 md:mt-4 text-[10px] sm:text-xs md:text-sm lg:text-base opacity-60 sm:opacity-70 md:opacity-75">
                (Eclesiastes 4:9,10,12)
              </span>
            </p>
          </div>
        </div>
      </footer>
    )
  }
  