import { Manrope, Noto_Serif, Square_Peg } from "next/font/google";
import Features from "../components/Features";

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "800"],
});

const Rooms = () => {
  return (
  <main className="pt-24">
    <section className="relative h-204.75 flex items-center px-8 md:px-24 overflow-hidden">
      <div className="z-10 max-w-4xl">
        <span className={`${manrope.className} text-(--primary) tracking-[0.4em] uppercase text-xs mb-6 block`}>The Private Sanctuary</span>
          <h1 className={`${notoSerif.className} text-(--text-white) text-6xl md:text-8xl leading-none mb-8 tracking-tighter`}>
              Sanctuary <br/> 
                <span className="text-(--primary) italic font-normal">Redefined</span>
</h1>
<p className="text-lg text-(--on-surface-variant) leading-relaxed max-w-xl">
  A curated selection of living spaces designed for the discerning global traveler. Every room is an architectural dialogue between West African heritage and contemporary obsidian aesthetics.
  </p>
</div>
<div className="absolute right-0 top-0 w-2/3 h-full opacity-40 ">
<div className="h-full bg-cover bg-center bg-[url('/check-in.jpg')]"></div>
<div className="absolute inset-0 bg-linear-to-r from-(--surface) via-(--surface/60) to-transparent"></div>
</div>
</section>

{/**rooms section */}
<section className="py-32 px-8 md:px-24 grid md:grid-cols-12 grid-cols-1 gap-12 items-center bg-(--surface-container-lowest)">

  {/* === IMAGE COLUMN === */}
  <div className="md:col-span-7 relative">
    <img className="w-full h-175 object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700" src="presidential suite.jpg" alt="Presidential Suite"/>
    
    <div className="absolute -top-12 -left-12 w-48 h-48 border-l border-t border-(--primary) hidden md:block"/>

    <div className="absolute md:block bottom-0 right-0 bg-(--surface) p-8 translate-x-12 translate-y-12 hidden border border-(--outline-variant)">
      <span className={`${notoSerif.className} text-4xl text-(--primary-container)`}>01</span>
    </div>
  </div>  

  {/* === TEXT COLUMN === */}
  <div className="md:col-span-5 md:pl-12">
    <h2 className={`${notoSerif.className} text-7xl mb-6 tracking-tight text-white`}>Presidential Suite</h2>
    <div className="h-px w-24 bg-(--primary) mb-7"></div>
    <p className={`text-(--on-surface-variant) leading-relaxed mb-10 text-lg ${manrope.className}`}>
      Spanning across the entire top floor,the Presidential Suite offers a 360-degree vista of the Atlantic.Features include a private infinity plunge pool, dedicated butler service, and hand-carved obsidian details throughout the master lounge.
    </p>

    <div className="grid grid-cols-2 gap-6 mb-12">
      <div className="flex items-center space-x-3">
        <img src = "/square_foot.svg"></img>
        <span className={`${manrope.className} text-normal text-(--text-white) uppercase tracking-widest`}>240 sqm</span>
      </div>
      <div className="flex items-center space-x-3">
        <img src = "/pool.svg"></img>
        <span className={`${notoSerif.className} text-normal text-(--text-white) uppercase tracking-widest`}>Private Pool</span>
      </div>
      <div className="flex items-center space-x-3">
        <img src = "/bed.svg"></img>
        <span className={`${notoSerif.className} text-normal text-(--text-white) uppercase tracking-widest`}>Master King</span>
      </div>
      <div className="flex items-center space-x-3">
        <img src = "/wine.svg"></img>
        <span className={`${notoSerif.className} text-normal text-(--text-white) uppercase tracking-widest`}>Elite Cellar</span>
      </div>
    </div>

    <div className="flex items-baseline space-x-4 mb-8">
      <span className={`text-3xl ${notoSerif.className} text-(--primary)`}>$2,450</span>
      <span className={`${manrope.className} text-(--on-surface-variant) text-sm uppercase tracking-widest`}>Per Night</span>
    </div>

    <button className={`w-full text-(--text-white) py-5 border border-(--primary) hover:bg-(--primary-container) hover:text-(--on-primary) transition-all duration-500 ${manrope.className} uppercase tracking-widest text-sm`}>
      View Experience Details
    </button>
  </div>  {/* ← closes col-span-5 */}

</section>

<div className="h-48 bg-(--surface)"></div>
<section className="py-32 px-8 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
  <div className="md:col-span-5 order-2 md:order-1 md:pr-12">
    <h2 className={`${notoSerif.className} text-5xl mb-6 tracking-tight text-white`}>Executive Palm Suite</h2>
        <div className="h-px w-24 bg-(--primary) mb-7"></div>
        <p className={`text-(--on-surface-variant) leading-relaxed mb-10 text-lg ${manrope.className}`}>
      Designed for the modern executive, this suite blends productivity with unparalleled comfort. The palette is a sophisticated mix of charcoal textiles, brushed gold hardware, and local mahogany accents.
    </p>
    <ul className="space-y-4 mb-12 font-light text-(--on-surface)">
      <li className="flex items-center space-x-4">
        <span className="w-1.5 h-1.5 bg-(--primary)"></span>
        <span>High-Speed Dedicated Workspace</span>
         </li>

      <li className="flex items-center space-x-4">
        <span className="w-1.5 h-1.5 bg-(--primary)"></span>
        <span>Soundproof Media Lounge</span>
         </li>

      <li className="flex items-center space-x-4">
        <span className="w-1.5 h-1.5 bg-(--primary)"></span>
        <span>Rainfall Spa Wet-Room</span>
         </li>
    </ul>
    <div className="flex items-baseline space-x-4 mb-8">
      <span className={`text-3xl ${notoSerif.className} text-(--primary)`}>$1,150</span>
      <span className={`${manrope.className} text-(--on-surface-variant) text-sm uppercase tracking-widest`}>Per Night</span>
    </div>
    <button className={`w-full bg-(--primary-container) text-(--on-primary) py-5 border border-(--primary) hover:brightness-130 hover:text-(--on-primary) active:scale-95 transition-all duration-500 ${manrope.className} uppercase tracking-widest text-sm`}>
      Reserve Suite
    </button>
  </div>
  <div className="md:col-span-7 order-1 md:order-2 relative">
    <img className="w-full h-150 object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700" src="rooms.png" alt="Presidential Suite"/>
    <div className="absolute -bottom-8 -right-8 w-64 h-64 border-r border-b border-(--primary) hidden md:block"></div>
  </div>
</section>

<section className="py-40 px-8 md:px-24 bg-(--surface-container-low)">
  <div className="mb-24 text-center">
    <h2 className={`${notoSerif.className} text-(--text-white) text-5xl`}>Refined Accomodations</h2>
    <p className={`${manrope.className} text-(--primary) uppercase tracking-[0.3rem] mt-2.5 text-xs`}>a space for every intent</p>
  </div>
    {/** item 1*/}
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-250">
      <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-(--surface)">
        <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="rooms.png"/>
        <div className="absolute inset-0 p-12 flex flex-col justify-end bg-linear-to-t from-black to-transparent">
          <h3 className={`${notoSerif.className} text-3xl mb-2 text-(--text-white)`}>Heritage Loft</h3>
          <p className={`${manrope.className} text-(--primary) tracking-widest mb-4 text-xs uppercase`}>Starting at $850</p>
          <p className={`${manrope.className} text-(--on-surface)`}>Combining traditional West African textiles with contemporary industrial loft architecture</p>
        </div>
      </div>

      {/** item 2*/}
      <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-(--surface)">
        <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="..."/>
        <div className="absolute inset-0 p-12 flex flex-col justify-end bg-linear-to-t from-black to-transparent">
          <h3 className={`${notoSerif.className} text-3xl mb-2 text-(--text-white)`}>Ocean Terrace Room</h3>
          <p className={`${manrope.className} text-(--primary) tracking-widest mb-4 text-xs uppercase`}>Starting at $650</p>
        </div>
      </div>
        {/** item 3*/}
      <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-(--surface)">
        <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="..."/>
        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-black to-transparent">
          <h4 className={`${notoSerif.className} text-xl mb-2 text-(--text-white)`}>Standard Palm</h4>
          <p className={`${manrope.className} text-(--primary)`}>$450</p>
        </div>
      </div>
      {/** item 4*/}
      <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-(--surface)">
        <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="..."/>
        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-black to-transparent">
          <h4 className={`${notoSerif.className} text-xl mb-2 text-(--text-white)`}>Bespoke Stays</h4>
          <p className={`${manrope.className} text-(--primary)`}>$150</p>
        </div>
      </div>
    </div>
</section>
{/**cta-section */}
    <section className="py-32 px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/20 w-200 h-200 bg-(--primary-container) rounded-full blur-[170px]"></div>
        </div>
    <h2 className={`${notoSerif.className} text-(--text-white) md:text-7xl text-5xl mb-8`}>Secure Your<span className="italic">Sanctuary</span></h2>
    <p className="max-w-xl mx-auto text-(--on-surface-variant) mb-12 text-lg">
      Exclusive rates are available for direct bookings. Immerse yourself in the Golden Palm experience.
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
      <button className={`px-12 py-5 bg-(--primary-container) border-(--outline) text-(--on-primary) ${notoSerif.className} uppercase tracking-[0.2em] hover:brightness-130 hover:text-(--on-primary) active:scale-95 transition-all duration-500`}>check availability</button>
      <button className={`px-12 text-(--on-surface) py-5 border border-(--outline) hover:bg-(--primary) hover:text-(--on-primary) transition-all duration-500 ${manrope.className} uppercase tracking-[0.2em] text-sm`}>
      Contact conceige
    </button>
    </div>

    </section>
</main>
  );
};

export default Rooms;