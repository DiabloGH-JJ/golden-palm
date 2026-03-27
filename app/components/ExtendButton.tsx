import Image from "next/image";

interface buttonProps {
  text: string;
}

const ExtendButton = ({ text }: buttonProps) => {
  return (
    <button className="flex items-start gap-8 py-2 border-b-2 text-white transition duration-300 hover:text-(--primary) cursor-pointer">
      {text}{" "}
      <Image
        src="/arrow-outward.svg"
        alt="arrow outward"
        width={20}
        height={20}
      />
    </button>
  );
};

export default ExtendButton;
