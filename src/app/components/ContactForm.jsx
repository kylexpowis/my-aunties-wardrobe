"use client";

export default function ContactForm() {
  return (
    <form
      className="
      max-w-xl mx-auto my-8
      flex flex-col
    "
    >
      <input
        type="text"
        placeholder="Your Name"
        className="
          p-4 my-2 text-base text-black
          placeholder-gray-500 rounded
          border border-gray-700
        "
      />
      <input
        type="email"
        placeholder="Your Email"
        className="
          p-4 my-2 text-base text-black
          placeholder-gray-500 rounded
          border border-gray-700
        "
      />
      <textarea
        placeholder="Your Message"
        className="
          p-4 my-2 text-base text-black
          placeholder-gray-500 rounded
          border border-gray-700 min-h-[150px]
        "
      ></textarea>
      <button
        type="submit"
        className="
          bg-white text-black
          py-4 px-6
          text-base
          border-none
          cursor-pointer
          mt-4
          rounded
          hover:bg-gray-300
          transition
        "
      >
        Contact form down until tomorrow :(
      </button>
    </form>
  );
}
