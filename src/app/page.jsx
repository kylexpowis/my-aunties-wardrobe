"use client";

import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";

export default function HomePage() {
  return (
    <main className="bg-black text-white font-sans">
      <NavBar />

      {/* Banner below navbar */}
      <div className="mt-20 w-full aspect-[16/9] overflow-hidden">
        <img
          src="/images/banner.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gallery Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-1xl font-bold mb-8">Gallery</h2>
        <Gallery />
      </section>

      {/* Location Section */}
      <section className="py-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Find us 📍 </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Map */}
          <div className="w-full md:w-1/2 h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.415543166892!2d149.79716387640028!3d-35.4445055726645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1678320e517bab%3A0x6ca0d97eab0f3c3a!2s103%20Wallace%20St%2C%20Braidwood%20NSW%202622%2C%20Australia!5e0!3m2!1sen!2suk!4v1751503261321!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>

          {/* Address Text */}
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
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="max-w-xl mx-auto mb-8">Drop us a message anytime!</p>
        <ContactForm />
      </section>
    </main>
  );
}
