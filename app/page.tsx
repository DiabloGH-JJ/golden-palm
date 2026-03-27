"use client";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { Manrope, Noto_Serif } from "next/font/google";
import Image from "next/image";
import SuiteCard from "./components/SuiteCard";
import Link from "next/link";
import ExtendButton from "./components/ExtendButton";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <section>
        <div>
          <div className="flex justify-between items-end px-55 mb-20">
            <div>
              <p
                className={`text-(--primary) text-sm tracking-[0.3em] ${manrope.className}`}
              >
                SELECTION
              </p>
              <h5
                className={`text-white text-5xl ${notoSerif.className} mt-2 font-bold`}
              >
                The Suites.
              </h5>
            </div>
            <div>
              <Link
                className={`text-(--primary) ${manrope.className} text-lg `}
                href="/rooms"
              >
                <ExtendButton text="VIEW ALL SUITES" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-20 px-55 mb-20">
          <SuiteCard
            image="/royal.jpg"
            title="The Royal Palm Suite"
            description="From $850 per night"
            icon="/car.svg"
          />
          <SuiteCard
            image="/penthouse.jpg"
            title="Skyline Penthouse"
            description="From $1200 per night"
            icon="/architecture.svg"
          />
          <SuiteCard
            image="/deluxe.jpg"
            title="Architectural Deluxe"
            description="From $850 per night"
            icon="/skyline.svg"
          />
        </div>
      </section>
      <section className="bg-[#1c1b1b] px-55 py-20 min-h-[90vh] grid grid-cols-2 gap-6">
        <div className="w-[1/2] h-full  bg-[url('/bedding.jpg')] bg-cover bg-bottom"></div>
        <div className="w-[1/2] grid grid-rows-2 gap-6">
          <div className="bg-[url('/wallpainting.jpg')] bg-contain"></div>
          <div className="shadow-xl bg-black/60 p-20 flex flex-col gap-4">
            <h3 className={`text-white text-5xl ${notoSerif.className} `}>
              The Art of <br />
              <span className="text-(--primary) italic font-light">
                Spatial Design
              </span>
            </h3>
            <p className="text-neutral-300">
              Ever corridor is a gallery, every room is a statement. Golden Palm
              is a celebration of geometry and light, offering an immersive
              experience for the design-concious traveler.
            </p>
            <div className="self-start">
              <ExtendButton text="VIEW FULL GALLERY" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
