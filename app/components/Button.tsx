import { Manrope } from "next/font/google";

interface ButtonData {
  text: string;
}

const manrope = Manrope({
  weight: ["200", "300", "400"],
});

const Button = ({ text }: ButtonData) => {
  return (
    <div
      className={`px-8 py-3 bg-(--primary) text-black text-xs tracking-widest hover:bg-(--hover-color) hover:text-[--text-hover] font-serif cursor-pointer ${manrope.className}`}
    >
      {text}
    </div>
  );
};

export default Button;
