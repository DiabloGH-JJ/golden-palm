import { Manrope, Noto_Serif } from "next/font/google";

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "800"],
});


const Footer = () =>{
return(
<footer className="bg-[#131313] dark:bg-[#131313] border-t border-[#D4AF37]/10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-480 mx-auto">
        <div className="md:col-span-1">
            <span className={`${notoSerif.className} text-3xl cursor-default mb-8 block text-[#D4AF37]`}>GOLDEN PALM</span>
<p className={`${manrope.className} font-light tracking-wide cursor-default text-[#E5E2E1]/60 text-sm leading-loose`}>
    Arch-Luxury redefined in the heart of the Gold Coast. A sanctuary for the modern connoisseur.
</p>
        </div>
<div>
<h4 className={`${notoSerif.className} text-sm uppercase cursor-default tracking-[0.2em] text-[#F2CA50] mb-8`}>Navigation</h4>
<ul className="space-y-4">
<li><a className={`${manrope.className} font-light tracking-wide text-[#E5E2E1]/60 hover:text-[#F2CA50] transition-colors duration-300`} href="#">Privacy Policy</a></li>
<li><a className={`${manrope.className} font-light tracking-wide text-[#E5E2E1]/60 hover:text-[#F2CA50] transition-colors duration-300`} href="#">Terms of Service</a></li>
<li><a className={`${manrope.className} font-light tracking-wide text-[#E5E2E1]/60 hover:text-[#F2CA50] transition-colors duration-300`} href="#">Sustainability</a></li>
<li><a className={`${manrope.className} font-light tracking-wide text-[#E5E2E1]/60 hover:text-[#F2CA50] transition-colors duration-300`} href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className={`${notoSerif.className} cursor-default text-sm uppercase tracking-[0.2em] text-[#F2CA50] mb-8`}>Reservations</h4>
<p className={`${manrope.className} font-light tracking-wide cursor-default text-[#E5E2E1]/60 text-sm mb-4`}>+233 24 000 0000</p>
<p className={`${manrope.className} font-light tracking-wide cursor-default text-[#E5E2E1]/60 text-sm`}>reservations@goldenpalm.com</p>
</div>
<div>
<h4 className={`${notoSerif.className} text-sm uppercase cursor-default tracking-[0.2em] text-[#F2CA50] mb-8`}>Location</h4>
<p className={`${manrope.className} font-light cursor-default tracking-wide text-[#E5E2E1]/60 text-sm leading-loose`}>
                    No. 12 Obsidian Drive,<br/>Luxury Quarter, Accra,<br/>Ghana
                </p>
</div>
</div>
<div className="px-12 py-8 border-t border-[#D4AF37]/5 text-center">
<p className={`${manrope.className} font-light cursor-default text-[#E5E2E1]/40 text-[10px] uppercase tracking-[0.3em]`}>
                © 2024 GOLDEN PALM HOTEL. ALL RIGHTS RESERVED.
            </p>
</div>
</footer>
)
};

export default Footer;