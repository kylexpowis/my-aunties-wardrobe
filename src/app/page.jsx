// app/page.jsx
"use client";

import { useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import ParticlesBackground from "./components/ParticlesBackground";

export default function HomePage() {
  // 1️⃣ Create refs for each section
  const galleryRef = useRef(null);
  const findUsRef = useRef(null);
  const contactRef = useRef(null);

  // 2️⃣ Smooth‐scroll helper
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 3️⃣ Always start at top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className=" text-white font-sans overflow-x-hidden mt-[68px]">
      <ParticlesBackground />
      {/* 4️⃣ Pass handler & refs into NavBar */}
      <NavBar
        scrollToSection={scrollToSection}
        galleryRef={galleryRef}
        findUsRef={findUsRef}
        contactRef={contactRef}
      />

      {/* Banner */}
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src="/images/banner.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gallery Section */}
      <section ref={galleryRef} className="scroll-mt-16 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Gallery />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <p>
              My Aunties Wardrobe is a charming pre-loved clothing store nestled
              in the heart of Braidwood, offering a curated selection of
              everyday wear and exquisite pieces for special occasions.
            </p>
            <p>
              With a passion for sustainability and style, we give new life to
              gently loved fashion. Whether you’re after something timeless for
              everyday wear or something truly unique for a celebration, we’re
              here to help you. While you express your individual style, we look
              forward to you adding new life and history to each piece.
            </p>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section ref={findUsRef} className="scroll-mt-16 py-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Find us 📍</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.415543166892!2d149.79716387640028!3d-35.4445055726645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1678320e517bab%3A0x6ca0d97eab0f3c3a!2s103%20Wallace%20St%2C%20Braidwood%20NSW%202622%2C%20Australia!5e0!3m2!1sen!2suk!4v1751503261321!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">My Auntie's Wardrobe</h3>
            <p>The Collective</p>
            <p>Shop 1A</p>
            <p>103 Wallace Street</p>
            <p>Braidwood</p>
            <p>NSW 2622</p>
            <p className="mt-4">Come visit us in store!</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="scroll-mt-16 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="max-w-xl mx-auto mb-8">Drop us a message anytime!</p>
        <ContactForm />
      </section>
    </main>
  );
}
