import LinkCard from "./LinkCard";
import Image from "next/image";
import { Noto_Serif, Manrope } from "next/font/google";

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const Features = () => {
  return (
    <div className="py-20 px-55">
      {/* top */}
      <div className="flex justify-between gap-96 text-white">
        <p className="text-6xl">
          Curated <br /> <span className="text-(--primary)">Excellence.</span>
        </p>
        <p className={`self-end text-xl ${manrope.className}`}>
          our amenities are designed to be an extension of the
          architecture-functional, bold, and entirely private
        </p>
      </div>
      {/* bottom */}
      <div className="flex items-center gap-2 justify-between">
        {/* left */}
        <div className="mt-20 w-1/2 h-[90vh]">
          <LinkCard
            title="AQUATIC HAVEN"
            description="Obsidian Infinity Pool"
            imageLink="/poolside.jpg"
          />
        </div>
        {/* right */}
        <div className="w-1/2 h-[90vh] mt-20 flex flex-col gap-2">
          <div className="w-full h-1/2">
            <LinkCard
              title="AQUATIC HAVEN"
              description="The Golden Spa"
              imageLink="/spa.jpg"
            />
          </div>
          <div className="w-full h-1/2 flex gap-2">
            <LinkCard
              title="AQUATIC HAVEN"
              description="Bar Noir"
              imageLink="/bar.jpg"
            />
            <div
              className={`w-full h-full bg-[#2a2a2a] flex flex-col justify-center items-center gap-2 ${notoSerif.className}`}
            >
              <Image src="/dumbell.svg" alt="dumbell" width={30} height={30} />
              <h3 className="text-white text-3xl">High Tech Gym</h3>
              <p className={`text-white/60 text-xl ${manrope.className}`}>
                TECHNOGYM ELITE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
