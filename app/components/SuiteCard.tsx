import Image from "next/image";
import { Manrope, Noto_Serif } from "next/font/google";

interface CardInfo {
  title: string;
  image: string;
  icon: string;
  description: string;
}

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "800"],
});

const SuiteCard = ({ title, image, icon, description }: CardInfo) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={image}
        className="h-full w-full shadow-xl border border-[#99907c26]"
        alt="image"
        width={400}
        height={100}
      />
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h5 className={`${notoSerif.className} text-3xl text-white`}>
            {title}
          </h5>
          <p className={`${manrope.className} text-neutral-600 text-xl`}>
            {description}
          </p>
        </div>
        <Image src={icon} alt="icon" width={30} height={30} />
      </div>
    </div>
  );
};

export default SuiteCard;
