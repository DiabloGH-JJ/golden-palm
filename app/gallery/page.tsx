import { Manrope, Noto_Serif } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "800"],
});

const Gallery = () => {
  return(
    <main className="pt-20 md:pt-32 pb-24 overflow-x-hidden">
      <header className="px-6 md:px-8 lg:px-24 mb-16 md:mb-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="max-w-2xl">
            <span className={`${manrope.className} text-(--primary) cursor-default uppercase tracking-[0.4em] text-xs mb-4 block`}>
              visual archive
            </span>
            <h1 className={`${notoSerif.className} cursor-default text-(--text-white) text-5xl sm:text-6xl md:text-8xl font-bold leading-tight tracking-tighter`}>
              The Obsidian<br/><span className="text-(--primary) italic">Sanctuary</span>
            </h1>
          </div>
          <div className="cursor-default max-w-xs text-(--on-surface-variant) font-light leading-relaxed md:mb-4 text-sm md:text-base">
            An intentional exploration of architectural depth, light, and the raw beauty of Accra's most exclusive destination.
          </div>
        </div>
      </header>

      <section className="px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 lg:gap-8">

          {/* Row 1 — Facade */}
          <div className="md:col-span-8 group relative overflow-hidden h-72 sm:h-96 md:h-150 lg:h-200">
            <div className="absolute inset-0 bg-(--surface-container-low) transition-transform duration-700 group-hover:scale-105">
              <Image src="/facade.jpg" alt="Luxury Hotel Exterior" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"/>
            </div>
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className={`${notoSerif.className} cursor-default text-xl md:text-2xl text-(--text-white)`}>The Facade</p>
              <p className={`${manrope.className} cursor-default text-xs uppercase tracking-widest text-(--primary)`}>Obsidian Stone &amp; Glass</p>
            </div>
            <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Row 1 — Side column */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-8 md:mt-24">
            <div className="group relative overflow-hidden h-56 sm:h-72 md:h-100">
              <Image src="/interior.jpg" alt="Interior Detail" fill className="object-cover hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className={`${notoSerif.className} cursor-default text-xl md:text-2xl text-(--text-white)`}>Interior</p>
              </div>
            </div>

            <div className="bg-(--surface-container-high) p-6 md:p-8 flex flex-col justify-center">
              <span className="mb-4">
                <Image src="/architecture.svg" alt="architecture icon" width={40} height={40}/>
              </span>
              <h3 className={`${notoSerif.className} cursor-default text-(--text-white) text-lg md:text-xl mb-3 md:mb-4`}>Materiality</h3>
              <p className="text-sm cursor-default font-light text-(--on-surface-variant) leading-relaxed">
                Every surface is curated to reflect the dialogue between heritage and modernity.
              </p>
            </div>
          </div>

          {/* Row 2 — Suite */}
          <div className="md:col-span-4 h-72 sm:h-96 md:h-125 lg:h-175">
            <div className="group relative h-full w-full overflow-hidden">
              <Image src="/suite.jpg" alt="the suite" fill className="object-cover"/>
              <div className="absolute inset-0 bg-(--surface-container-lowest) group-hover:bg-transparent transition-all duration-700"></div>
              <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className={`${notoSerif.className} cursor-default text-xl md:text-2xl text-(--text-white)`}>The Suites</p>
              </div>
              <div className="absolute top-0 right-0 p-6 md:p-8">
                <span className={`text-5xl md:text-6xl cursor-default ${notoSerif.className} font-bold text-(--surface-container-highest)`}>02</span>
              </div>
            </div>
          </div>

          {/* Row 2 — Pool */}
          <div className="md:col-span-8 md:-mt-25 z-10">
            <div className="group relative h-72 sm:h-96 md:h-100 lg:h-125 overflow-hidden bg-(--surface-container)">
              <Image src="/pool.jpg" alt="pool area" fill className="object-cover grayscale"/>
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 text-right">
                <h2 className={`text-3xl md:text-4xl cursor-default ${notoSerif.className} mb-2 text-(--text-white)`}>The Azure</h2>
                <p className={`${manrope.className} cursor-default text-(--primary) tracking-widest text-xs uppercase`}>Rooftop Infinity Space</p>
              </div>
            </div>
          </div>

          {/* Row 3 — Spa */}
          <div className="md:col-span-3 h-64 md:h-100">
            <div className="bg-(--surface-container-low) h-full flex items-center justify-center p-8 md:p-12 border-l border-(--primary)">
              <div className="text-center">
                <Image src="/spa-icon.svg" alt="spa icon" width={48} height={48} className="mx-auto mb-4"/>
                <h4 className={`${notoSerif.className} cursor-default text-base md:text-lg uppercase tracking-widest text-white mt-2`}>The spa</h4>
              </div>
            </div>
          </div>

          {/* Row 3 — Fine Dining */}
          <div className="md:col-span-6 group relative overflow-hidden h-64 md:h-100">
            <Image src="/dining.jpg" alt="Fine Dining" fill className="object-cover group-hover:scale-105 transition-transform duration-1000"/>
            <div className="absolute inset-0 bg-(--surface-container-lowest) group-hover:bg-transparent transition-all duration-700"></div>
            <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className={`${notoSerif.className} cursor-default text-xl md:text-2xl text-(--text-white)`}>Fine Dining</p>
            </div>
          </div>

          {/* Row 3 — Lounge */}
          <div className="md:col-span-3 h-64 md:h-100">
            <div className="group relative h-full w-full overflow-hidden border-r border-(--primary)">
              <Image src="/lounge.jpg" alt="lounge area" fill className="object-cover group-hover:scale-105 transition-transform duration-1000"/>
              <div className="absolute inset-0 bg-(--surface-container-lowest) group-hover:bg-transparent transition-all duration-700"></div>
              <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className={`${notoSerif.className} cursor-default text-xl md:text-2xl text-(--text-white)`}>Lounge Area</p>
              </div>
            </div>
          </div>

          {/* Row 4 — Elevate banner */}
          <div className="md:col-span-12 mt-8 md:mt-12">
            <div className="relative w-full h-72 sm:h-96 md:h-150 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center px-6 md:px-8">
                  <p className={`${manrope.className} cursor-default text-(--primary) tracking-[0.5em] text-xs md:text-sm mb-4 md:mb-6 uppercase`}>curated excellence</p>
                  <h2 className={`${notoSerif.className} cursor-default text-4xl sm:text-5xl md:text-7xl text-(--on-surface-high) mb-6 md:mb-8`}>Elevate Your Presence</h2>
                  <button className={`border border-(--primary) text-(--primary) px-8 md:px-12 py-3 md:py-4 ${notoSerif.className} uppercase tracking-widest hover:bg-(--primary) hover:text-(--on-primary) transition-all text-sm md:text-base`}>
                    enquire now
                  </button>
                </div>
              </div>
              <Image src="/banner.jpg" alt="banner" fill className="object-cover brightness-50"/>
            </div>
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="mt-20 md:mt-32 px-6 md:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-(--outline-variant) pt-12 md:pt-16 gap-10 md:gap-8">
          <div>
            <h3 className={`${notoSerif.className} cursor-default text-3xl md:text-4xl mb-3 md:mb-4 text-(--text-white)`}>Stay Informed</h3>
            <p className="text-(--on-surface-variant) cursor-default font-light mb-8 max-w-sm text-sm md:text-base leading-relaxed">
              Receive exclusive invitations to private events and gallery openings at the Palm.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="relative">
              <input
                className={`${manrope.className} px-3 py-4 w-full bg-transparent border-b border-(--outline-variant) focus:outline-none focus:border focus:border-(--primary) transition-colors tracking-widest text-sm text-(--on-surface)`}
                placeholder="EMAIL ADDRESS"
                type="email"
              />
              <button className={`absolute right-0 bottom-4 text-(--primary) ${notoSerif.className} cursor-pointer uppercase text-xs tracking-widest hover:translate-x-2 transition-transform mr-2`}>
                join
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Gallery;