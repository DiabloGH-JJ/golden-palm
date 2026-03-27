"use client"
import { Manrope, Noto_Serif } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "800"],
});

const Rooms = () => {
  
  return (
    <main className="pt-20 md:pt-24 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] md:h-[80vh] lg:h-204 flex items-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="z-10 max-w-4xl">
          <span className={`${manrope.className} text-(--primary) tracking-[0.4em] uppercase text-xs mb-4 md:mb-6 block`}>
            The Private Sanctuary
          </span>
          <h1 className={`${notoSerif.className} text-(--text-white) text-5xl sm:text-6xl md:text-8xl leading-none mb-6 md:mb-8 tracking-tighter`}>
            Sanctuary <br/>
            <span className="text-(--primary) italic font-normal">Redefined</span>
          </h1>
          <p className="text-base md:text-lg text-(--on-surface-variant) leading-relaxed max-w-xl">
            A curated selection of living spaces designed for the discerning global traveler. Every room is an architectural dialogue between West African heritage and contemporary obsidian aesthetics.
          </p>
        </div>
        <div className="absolute right-0 top-0 w-full md:w-2/3 h-full opacity-40">
          <div className="h-full bg-cover bg-center bg-[url('/check-in.jpg')]"></div>
          <div className="absolute inset-0 bg-linear-to-r from-(--surface) via-(--surface)/60 to-transparent"></div>
        </div>
      </section>

      {/* ── PRESIDENTIAL SUITE ── */}
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 grid md:grid-cols-12 grid-cols-1 gap-8 md:gap-12 items-center bg-(--surface-container-lowest)">

        {/* Image column */}
        <div className="md:col-span-7 relative">
          <div className="relative w-full h-72 sm:h-96 md:h-175">
            <Image
              className="object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
              src="/presidential-suite.jpg"
              alt="Presidential Suite"
              fill
            />
          </div>
          <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 border-l border-t border-(--primary) hidden md:block"/>
          <div className="absolute bottom-0 right-0 bg-(--surface) p-6 md:p-8 md:translate-x-12 md:translate-y-12 hidden md:block border border-(--outline-variant)">
            <span className={`${notoSerif.className} text-3xl md:text-4xl text-(--primary-container)`}>01</span>
          </div>
        </div>

        {/* Text column */}
        <div className="md:col-span-5 md:pl-12">
          <h2 className={`${notoSerif.className} text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tight text-white`}>Presidential Suite</h2>
          <div className="h-px w-24 bg-(--primary) mb-7"></div>
          <p className={`text-(--on-surface-variant) leading-relaxed mb-8 md:mb-10 text-base md:text-lg ${manrope.className}`}>
            Spanning across the entire top floor, the Presidential Suite offers a 360-degree vista of the Atlantic. Features include a private infinity plunge pool, dedicated butler service, and hand-carved obsidian details throughout the master lounge.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="flex items-center space-x-3">
              <Image src="/square_foot.svg" alt="size" width={20} height={20}/>
              <span className={`${manrope.className} text-sm text-(--text-white) uppercase tracking-widest`}>240 sqm</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/pool.svg" alt="pool" width={20} height={20}/>
              <span className={`${notoSerif.className} text-sm text-(--text-white) uppercase tracking-widest`}>Private Pool</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/bed.svg" alt="bed" width={20} height={20}/>
              <span className={`${notoSerif.className} text-sm text-(--text-white) uppercase tracking-widest`}>Master King</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/wine.svg" alt="wine" width={20} height={20}/>
              <span className={`${notoSerif.className} text-sm text-(--text-white) uppercase tracking-widest`}>Elite Cellar</span>
            </div>
          </div>

          <div className="flex items-baseline space-x-4 mb-6 md:mb-8">
            <span className={`text-2xl md:text-3xl ${notoSerif.className} text-(--primary)`}>$2,450</span>
            <span className={`${manrope.className} text-(--on-surface-variant) text-sm uppercase tracking-widest`}>Per Night</span>
          </div>

          <button className={`w-full text-(--text-white) py-4 md:py-5 border border-(--primary) hover:bg-(--primary-container) hover:text-(--on-primary) transition-all duration-500 ${manrope.className} uppercase tracking-widest text-sm`}>
            View Experience Details
          </button>
        </div>

      </section>

      {/* ── SPACER ── */}
      <div className="h-16 md:h-48 bg-(--surface)"></div>

      {/* ── EXECUTIVE PALM SUITE ── */}
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

        {/* Text column */}
        <div className="md:col-span-5 order-2 md:order-1 md:pr-12">
          <h2 className={`${notoSerif.className} text-4xl sm:text-5xl mb-6 tracking-tight text-white`}>Executive Palm Suite</h2>
          <div className="h-px w-24 bg-(--primary) mb-7"></div>
          <p className={`text-(--on-surface-variant) leading-relaxed mb-8 md:mb-10 text-base md:text-lg ${manrope.className}`}>
            Designed for the modern executive, this suite blends productivity with unparalleled comfort. The palette is a sophisticated mix of charcoal textiles, brushed gold hardware, and local mahogany accents.
          </p>
          <ul className="space-y-4 mb-8 md:mb-12 font-light text-(--on-surface)">
            <li className="flex items-center space-x-4">
              <span className="w-1.5 h-1.5 bg-(--primary) shrink-0"></span>
              <span>High-Speed Dedicated Workspace</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-1.5 h-1.5 bg-(--primary) shrink-0"></span>
              <span>Soundproof Media Lounge</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-1.5 h-1.5 bg-(--primary) shrink-0"></span>
              <span>Rainfall Spa Wet-Room</span>
            </li>
          </ul>
          <div className="flex items-baseline space-x-4 mb-6 md:mb-8">
            <span className={`text-2xl md:text-3xl ${notoSerif.className} text-(--primary)`}>$1,150</span>
            <span className={`${manrope.className} text-(--on-surface-variant) text-sm uppercase tracking-widest`}>Per Night</span>
          </div>
          <button className={`w-full bg-(--primary-container) text-(--on-primary) py-4 md:py-5 border border-(--primary) hover:brightness-130 active:scale-95 transition-all duration-500 ${manrope.className} uppercase tracking-widest text-sm`}>
            Reserve Suite
          </button>
        </div>

        {/* Image column */}
        <div className="md:col-span-7 order-1 md:order-2 relative">
          <div className="relative w-full h-72 sm:h-96 md:h-150">
            <Image
              className="object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
              src="/rooms.png"
              alt="Executive Palm Suite"
              fill
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-40 h-40 md:w-64 md:h-64 border-r border-b border-(--primary) hidden md:block"></div>
        </div>

      </section>

      {/* ── REFINED ACCOMMODATIONS GRID ── */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-(--surface-container-low)">
        <div className="mb-12 md:mb-24 text-center">
          <h2 className={`${notoSerif.className} text-(--text-white) text-4xl md:text-5xl`}>Refined Accommodations</h2>
          <p className={`${manrope.className} text-(--primary) uppercase tracking-[0.3rem] mt-2.5 text-xs`}>a space for every intent</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-8 h-auto md:h-250">

          {/* Heritage Loft — spans 2 rows on md */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-(--surface) h-72 sm:h-96 md:h-full">
            <Image className="absolute inset-0 object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="/rooms.png" alt="Heritage Loft" fill/>
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-linear-to-t from-black to-transparent">
              <h3 className={`${notoSerif.className} text-2xl md:text-3xl mb-2 text-(--text-white)`}>Heritage Loft</h3>
              <p className={`${manrope.className} text-(--primary) tracking-widest mb-3 md:mb-4 text-xs uppercase`}>Starting at $850</p>
              <p className={`${manrope.className} text-(--on-surface) text-sm md:text-base`}>Combining traditional West African textiles with contemporary industrial loft architecture</p>
            </div>
          </div>

          {/* Ocean Terrace — spans 2 cols on md */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-(--surface) h-56 sm:h-64 md:h-full">
            <Image className="absolute inset-0 object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="/ocean-terrace.jpg" alt="Ocean Terrace Room" fill/>
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-linear-to-t from-black to-transparent">
              <h3 className={`${notoSerif.className} text-2xl md:text-3xl mb-2 text-(--text-white)`}>Ocean Terrace Room</h3>
              <p className={`${manrope.className} text-(--primary) tracking-widest mb-4 text-xs uppercase`}>Starting at $650</p>
            </div>
          </div>

          {/* Standard Palm */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-(--surface) h-56 sm:h-64 md:h-full">
            <Image className="absolute inset-0 object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="/standard-palm.jpg" alt="Standard Palm" fill/>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-linear-to-t from-black to-transparent">
              <h4 className={`${notoSerif.className} text-lg md:text-xl mb-2 text-(--text-white)`}>Standard Palm</h4>
              <p className={`${manrope.className} text-(--primary)`}>$450</p>
            </div>
          </div>

          {/* Bespoke Stays */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-(--surface) h-56 sm:h-64 md:h-full">
            <Image className="absolute inset-0 object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="/bespoke.jpg" alt="Bespoke Stays" fill/>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-linear-to-t from-black to-transparent">
              <h4 className={`${notoSerif.className} text-lg md:text-xl mb-2 text-(--text-white)`}>Bespoke Stays</h4>
              <p className={`${manrope.className} text-(--primary)`}>$150</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-200 h-96 md:h-200 bg-(--primary-container) rounded-full blur-[170px]"></div>
        </div>
        <h2 className={`${notoSerif.className} text-(--text-white) text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8`}>
          Secure Your <span className="italic">Sanctuary</span>
        </h2>
        <p className="max-w-xl mx-auto text-(--on-surface-variant) mb-10 md:mb-12 text-base md:text-lg">
          Exclusive rates are available for direct bookings. Immerse yourself in the Golden Palm experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <button className={`w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-(--primary-container) text-(--on-primary) ${notoSerif.className} uppercase tracking-[0.2em] hover:brightness-130 active:scale-95 transition-all duration-500`}>
            check availability
          </button>
          <button className={`w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border border-(--outline) text-(--on-surface) hover:bg-(--primary) hover:text-(--on-primary) transition-all duration-500 ${manrope.className} uppercase tracking-[0.2em] text-sm`}>
            Contact Concierge
          </button>
        </div>
      </section>

    </main>
  );
};

export default Rooms;