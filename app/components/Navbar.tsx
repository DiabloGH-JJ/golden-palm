"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  weight: ["500", "600", "700", "800"],
});

const Navbar = () => {
  let pathname = usePathname();
  const links = [
    {
      pageName: "HOME",
      path: "/",
    },
    {
      pageName: "ROOMS",
      path: "/rooms",
    },
    {
      pageName: "ABOUT",
      path: "/about",
    },
    {
      pageName: "GALLERY",
      path: "/gallery",
    },
    {
      pageName: "CONTACT",
      path: "/contact",
    },
  ];
  return (
    <nav className="py-6 px-6 flex justify-between items-center text-(--text-white) fixed w-screen left-0 bg-[#141414] z-50">
      {/* logo */}
      <p
        className={`text-[1.5rem] tracking-tight ${notoSerif.className} font-bold`}
      >
        GOLDEN PALM
      </p>
      {/* links */}
      <div
        className={`flex items-center gap-10 tracking-[.2em] ${notoSerif.className} font-normal leading-5`}
      >
        {links.map((link) => (
          <Link
            className={`${pathname === link.path ? "text-(--primary) border-b-2 pb-1" : "text-white"} hover:text-(--hover-color) transition-colors duration-200 text-sm`}
            key={link.path}
            href={link.path}
          >
            {link.pageName}
          </Link>
        ))}
      </div>
      {/* button */}
      <Button text="BOOK NOW" />
    </nav>
  );
};

export default Navbar;
