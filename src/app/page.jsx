// app/page.jsx
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import ParticlesBackground from "./components/ParticlesBackground";

export default function HomePage() {
  const galleryRef = useRef(null);
  const findUsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // start at top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <main className="text-white overflow-x-hidden mt-[68px] font-heading scroll-smooth">
      <ParticlesBackground />
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
          {/* Gallery slides in from left */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={slideInLeft}
          >
            <Gallery />
          </motion.div>

          {/* Text slides in from right */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={slideInRight}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Find Us Section */}
      <section ref={findUsRef} className="scroll-mt-16 py-16 px-4 min-h-screen">
        <h2 className="text-2xl font-bold mb-8 text-center font-heading">
          Find us 📍
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Map slides in from left */}
          <motion.div
            className="w-full md:w-1/2 h-64 md:h-96"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={slideInLeft}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.415543166892!2d149.79716387640028!3d-35.4445055726645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1678320e517bab%3A0x6ca0d97eab0f3c3a!2s103%20Wallace%20St%2C%20Braidwood%20NSW%202622%2C%20Australia!5e0!3m2!1sen!2suk!4v1751503261321!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            />
          </motion.div>

          {/* Info slides in from right */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={slideInRight}
          >
            <h3 className="text-xl font-semibold mb-4">My Auntie's Wardrobe</h3>
            <p>The Collective</p>
            <p>Shop 1A</p>
            <p>103 Wallace Street</p>
            <p>Braidwood</p>
            <p>NSW 2622</p>
            <p className="mt-4">Come visit us in store!</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.div
        ref={contactRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="scroll-mt-16 py-16 px-4 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="max-w-xl mx-auto mb-8">Drop us a message anytime!</p>
        <ContactForm />
      </motion.div>
    </main>
  );
}
