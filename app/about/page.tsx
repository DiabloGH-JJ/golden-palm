import { Manrope, Noto_Serif, Square_Peg } from "next/font/google";

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "800"],
});
const About = () => {
  return(
    <main className="pt-32 pb-24">
      <header className="px-8 md:px-24 mb-24 max-w-400 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className={`${manrope.className} text-(--primary) uppercase tracking-[0.4em] text-xs mb-4 block`}>
              visual archive
            </span>
            <h1 className={`${notoSerif.className} text-(--text-white) text-6xl md:text-8xl font-bold leading-tight tracking-tighter`}>
              The Obsidian<br/><span className="text-(--primary) italic">Sanctuary</span>
            </h1>
          </div>
          <div className="max-w-xs text-(--on-surface-variant) font-light leading-relaxed mb-4">
            An intentional exploration of architectural depth, light, and the raw beauty of Accra's most exclusive destination.
          </div>
        </div>
      </header>
 
      <section className="px-4 md:px-12 max-w-480 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
 
          {/* Row 1 — Facade + Side column */}
          <div className="md:col-span-8 group relative overflow-hidden h-150 md:h-200">
            <div className="absolute inset-0 bg-(--surface-container-low) transition-transform duration-700 group-hover:scale-105">
              <img src="..." alt="Luxury Hotel Exterior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"/>
            </div>
            <div className="absolute bottom-8 left-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className={`${notoSerif.className} text-2xl text-(--text-white)`}>The Facade</p>
              <p className={`${manrope.className} text-xs uppercase tracking-widest text-(--primary)`}>Obsidian Stone &amp; Glass</p>
            </div>
            <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
 
          <div className="md:col-span-4 flex flex-col gap-8 md:mt-24">
            <div className="group relative overflow-hidden h-100">
              <img src="..." alt="Interior Detail" className="w-full h-full object-cover hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
 
            <div className="bg-(--surface-container-high) p-8 flex flex-col justify-center">
              <span className="mb-4 text-4xl">
                <img src="architecture.svg" alt="architecture icon" className="w-10 h-10"/>
              </span>
              <h3 className={`${notoSerif.className} text-(--text-white) text-xl mb-4`}>Materiality</h3>
              <p className="text-sm font-light text-(--on-surface-variant) leading-relaxed">
                Every surface is curated to reflect the dialogue between heritage and modernity.
              </p>
            </div>
          </div>
 
          {/* Row 2 — Suite + Pool */}
          <div className="md:col-span-4 h-125 md:h-175">
            <div className="group relative h-full w-full overflow-hidden">
              <img className="w-full h-full object-cover" src="..." alt="the suite"/>
              <div className="absolute inset-0 bg-(--surface-container-lowest) group-hover:bg-transparent transition-all"></div>
              <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 p-8">
                <span className={`text-6xl ${notoSerif.className} font-bold text-(--surface-container-highest)`}>02</span>
              </div>
            </div>
          </div>
 
          <div className="md:col-span-8 md:-mt-25 z-10">
            <div className="group relative h-100 md:h-125 overflow-hidden bg-(--surface-container)">
              <img className="w-full h-full object-cover grayscale" src="..." alt="pool area"/>
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-12 right-12 text-right">
                <h2 className={`text-4xl ${notoSerif.className} mb-2`}></h2>
                <p className={`${manrope.className} text-(--primary) tracking-widest text-xs uppercase`}>Rooftop Infinity Space</p>
              </div>
            </div>
          </div>
 
          {/* Row 3 — Spa */}
          <div className="md:col-span-3 h-100">
            <div className="bg-(--surface-container-low) h-full flex items-center justify-center p-12 border-l border-(--primary)">
              <div className="text-center">
                <span className="text-(--primary) text-5xl mb-6">
                  <img src="globe.svg" alt="globe icon" className="w-12 h-12 mx-auto"/>
                </span>
                <h4 className={`${notoSerif.className} text-lg uppercase tracking-widest text-white mt-2`}>The spa</h4>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 group relative overflow-hidden h-100">
            <img alt="Fine Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"/>
            <div className="absolute inset-0 bg-(--surface-container-lowest) group-hover:bg-transparent transition-all"></div>
            <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="md:col-span-3 h-100">
            <div className="group relative h-full w-full overflow-hidden border-r border-(--primary)">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="lounge area" src="..."/>
              <div className="absolute inset-0 bg-(--surface-container-lowest) group-hover:bg-transparent transition-all"></div>
            </div>
          </div>

          <div className="md:col-span-12 mt-12">
            <div className="relative w-full h-150 overflow-hidden ">
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center px-8">
                  <p className={`${manrope.className} text-(--primary) tracking-[0.5em] text-sm mb-6 uppercase`}>curated excellence</p>
                  <h2 className={`${notoSerif.className} text-5xl md:text-7xl text-(--on-surface-high) mb-8`}>Elevate Your Presence</h2>
                  <button className={`border border-(--primary) text-(--primary) px-12 py-4 ${notoSerif.className} uppercase tracking-widest hover:bg-(--primary) hover:text-(--on-primary) transition-all`}>enquire now</button>
                </div>
              </div>
              <img className="w-full h-full object-cover brightness-50" alt="picture"/>
            </div>
          </div>
        </div>
      </section>

      {/**cta section */}
      <section className="mt-32 px-8 max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-(--outline-variant) pt-16">
          <div>
            <h3 className={`${notoSerif.className} text-4xl mb-4 text-(--text-white)`}>Stay Informed</h3>
            <p className="text-(--on-surface-variant) font-light mb-8 max-w-sm">Receive exclusive invitations to private events and gallery openings at the Palm.</p>
          </div>
          <div className="flex flex-col">
            <div className="relative group">
              <input className={`${manrope.className}px-3 py-4 w-full bg-transparent border-b border-(--outline-variant) focus:outline-none focus:border focus:border-(--primary) transition-colors tracking-widest text-sm text-(--on-surface)`}
              placeholder="EMAIL ADDRESS" type="email"/>
              <button className={`absolute right-0 bottom-4 text-(--primary) ${notoSerif.className} uppercase text-xs tracking-widest hover:translate-x-2 transition-transform mr-2`}>
                join
              </button>

            </div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default About;
