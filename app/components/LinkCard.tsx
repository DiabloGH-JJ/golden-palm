import Image from "next/image";
import { Noto_Serif, Manrope } from "next/font/google";

interface CardFormat {
  title: string;
  description?: string;
  imageLink: string;
  svgLink?: string;
}

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
});

const LinkCard = ({ title, imageLink, description, svgLink }: CardFormat) => {
  return (
    <div className="relative w-full h-full shadow-md shadow-neutral-950 border border-[#99907c26]">
      <div className="absolute w-full h-full bg-black/30 transition-colors duration-300 hover:bg-[#2a2a2a] z-10 flex items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <Image
            src={svgLink === undefined ? "" : svgLink}
            alt=""
            width={30}
            height={30}
            loading="lazy"
          />
          <h5 className={`text-white text-3xl ${notoSerif.className}`}>
            {title}
          </h5>
          <p className={`text-white/60 text-xl ${manrope.className}`}>
            {description}
          </p>
        </div>
      </div>
      <Image src={imageLink} alt={title} fill className="object-cover" />
    </div>
  );
};

export default LinkCard;
