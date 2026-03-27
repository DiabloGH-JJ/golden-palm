import ImageCard from "./ImageCard";
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
          <ImageCard
            title="AQUATIC HAVEN"
            description="Obsidian Infinity Pool"
            imageLink="/poolside.jpg"
            svgLink="/pool.svg"
          />
        </div>
        {/* right */}
        <div className="w-1/2 h-[90vh] mt-20 flex flex-col gap-2">
          <div className="w-full h-1/2">
            <ImageCard
              title="THE GOLDEN SPA"
              description="Spa Internationale"
              imageLink="/spa.jpg"
              svgLink="/spa.svg"
            />
          </div>
          <div className="w-full h-1/2 flex gap-2">
            <ImageCard
              title="BAR NOIR"
              description="Alchool Francais"
              imageLink="/bar.jpg"
              svgLink="/bar.svg"
            />
            <ImageCard
              title="HIGH TECH GYM"
              description="Technogym Elite"
              imageLink="/gym.jpg"
              svgLink="/dumbell.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
