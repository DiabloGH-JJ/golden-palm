import Image from "next/image";
import { Noto_Serif } from "next/font/google";

interface CardFormat {
  title: string;
  description: string;
  imageLink: string;
}

const notoSerif = Noto_Serif({
  weight: ["400", "500", "600", "700", "800"],
});

const LinkCard = ({ title, description, imageLink }: CardFormat) => {
  return (
    <div className="relative w-full h-full shadow-md shadow-neutral-950 border border-[#99907c26]">
      <div className="absolute w-full h-full bg-black/30 z-10"></div>
      <Image src={imageLink} alt={title} fill className="object-cover" />
    </div>
  );
};

export default LinkCard;
