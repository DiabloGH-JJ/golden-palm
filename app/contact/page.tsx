import { Manrope, Noto_Serif } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({
  weight: ["400", "600", "800"],
});

const notoSerif = Noto_Serif({
  weight: ["400", "600", "800"],
});

const Contact = () => {
  return(
    <main className="pt-32 pb-20">
      <section className="px-8 md:px-24 mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <h1 className={`${notoSerif.className} text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-tight text-(--text-white) mb-8 uppercase`}>
            stay in<br/><span className="text-(--primary) uppercase italic">touch</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-(--on-surface-variant) max-w-xl leading-relaxed">
            Exclusivity is a dialogue. Our concierge is prepared to tailor your sanctuary in the heart of the city.
          </p>
          </div>
        <div className="md:col-span-5 relative group">
          <div className="absolute -top-20 -left-20 w-64 h-64 pointer-events-none"></div>
            <Image src="" alt="Luxury hotel lobby" className="w-full h-125 object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"/>
            <div className="absolute inset-0 border border-(--primary) pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </section>

      {/**contact section */}
<section className="px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-40">
  {/* info */}
  <div className="lg:col-span-4 space-y-20">
    <div className="space-y-4">
      <span className={`${notoSerif.className} uppercase tracking-[0.3em] text-xs text-(--primary-container)`}>
        reservations
      </span>
      <h3 className={`${notoSerif.className} text-(--text-white) text-3xl`}>+233 302 123 4567</h3>
      <p className={`${notoSerif.className} text-(--on-surface-variant) font-light`}>available 24/7 for international booking</p>
    </div>
    <div className="space-y-4">
      <span className={`${notoSerif.className} uppercase tracking-[0.3em] text-xs text-(--primary-container)`}>location</span>
      <h3 className={`${notoSerif.className} text-(--text-white) text-3xl`}>N 05.6037°<br/>W 00.1870°</h3>
      <p className="text-(--on-surface-variant) font-light">Liberation Road, Airport Residential Area<br/>Accra, Ghana</p>
    </div>
    <div className="space-y-8 pt-8 border-t border-(--outline-variant)">
      <div className="flex items-center gap-6">
        <Image src="/mail.svg" alt="mail icon" width={20} height={20}/>
        <span className="text-lg font-light tracking-wide text-(--text-white)">concierge@goldenpalm.com</span>
      </div>
      <div className="flex items-center gap-6">
        <Image src="/message-square-text.svg" alt="whatsapp icon" width={20} height={20}/>
        <span className="text-lg font-light tracking-wide text-(--text-white)">WhatsApp Private Concierge</span>
      </div>
    </div>
  </div>

  {/* form column */}
  <div className="lg:col-span-8 p-8 md:p-16 relative">
    <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-(--primary-container)"></div>
    <form className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative">
          <input
            className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-(--outline-variant) text-(--text-white) appearance-none focus:ring-0 peer text-lg font-light"
            id="name" name="name" placeholder=" " type="text"
          />
          <label
            className={`absolute text-sm ${notoSerif.className} uppercase tracking-widest text-(--primary) duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-(--primary)`}
            htmlFor="name"
          >Full Name</label>
        </div>
        <div className="relative">
          <input
            className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-(--outline-variant) text-(--text-white) appearance-none focus:ring-0 peer text-lg font-light"
            id="email" name="email" placeholder=" " type="email"
          />
          <label
            className={`absolute text-sm ${notoSerif.className} uppercase tracking-widest text-(--primary) duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-(--primary)`}
            htmlFor="email"
          >Email Address</label>
        </div>
      </div>
      <div className="relative">
        <select
          className="block w-full px-0 py-4 bg-transparent border-0 border-b-2 border-(--outline-variant) appearance-none focus:ring-0 peer text-lg font-light text-(--on-surface-variant)"
          id="subject" name="subject"
        >
          <option value="">Nature of Inquiry</option>
          <option value="booking">Suite Reservation</option>
          <option value="event">Private Event &amp; Gala</option>
          <option value="press">Media &amp; Press</option>
          <option value="other">General Concierge</option>
        </select>
      </div>
      <div className="relative">
        <textarea
          className="block w-full px-0 py-4 text-(--text-white) bg-transparent border-0 border-b-2 border-(--outline-variant) appearance-none focus:ring-0 peer text-lg font-light"
          id="message" name="message" placeholder=" " rows={4}
        ></textarea>
        <label
          className={`absolute text-sm ${notoSerif.className} uppercase tracking-widest duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-(--primary) text-(--on-surface-variant)`}
          htmlFor="message"
        >Your Message</label>
      </div>
      <div className="flex items-center gap-4 py-4">
        <input
          className="w-5 h-5 bg-transparent border-(--outline-variant) text-(--primary) focus:ring-(--primary-container)"
          id="consent" type="checkbox"
        />
        <label className="text-sm font-light text-(--on-surface-variant)" htmlFor="consent">
          I agree to the processing of my personal data for the management of my request.
        </label>
      </div>
      <button
        className={`w-full md:w-auto px-16 py-5 bg-(--primary-container) text-(--on-primary) ${notoSerif.className} uppercase tracking-[0.3em] text-sm hover:bg-(--primary) transition-all duration-500 hover:shadow-[0_0_30px_rgba(242,202,80,0.2)]`}
        type="submit"
      >
        Send Inquiry
      </button>
    </form>
  </div>
</section>
    </main>
  );
};

export default Contact;
