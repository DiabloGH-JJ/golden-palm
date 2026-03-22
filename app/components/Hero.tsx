import { Manrope, Noto_Serif } from "next/font/google";

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "800"],
});

const Hero = () => {
  return (
    <section className="h-screen w-screen bg-[url('/grey.jpg')] bg-cover bg-bottom flex flex-row items-center justify-between z-0">
      <div className="w-full h-full absolute bg-black/20 z-10 \"></div>
      <div className=" relative px-55 z-50 w-2/3">
        <p className={`text-(--primary) tracking-widest ${manrope.className}`}>
          THE OBSIDIAN SANCTUARY
        </p>
        <h2
          className={`font-bold ${notoSerif.className} text-[6.5rem] text-white tracking-tighter leading-snug`}
        >
          Experience{" "}
          <span className="text-(--primary) italic font-semibold">Comfort</span>{" "}
          & Luxury in Accra
        </h2>
        <div>
          <p className="text-white text-lg">
            A curated editorial experience where West African heritage meets
            avant-garde brutalism. Discover a sanctuary of stone, light, and
            gold.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
