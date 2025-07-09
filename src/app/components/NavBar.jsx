// components/NavBar.jsx
"use client";

export default function NavBar({
  scrollToSection,
  galleryRef,
  findUsRef,
  contactRef,
}) {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        bg-black/50 backdrop-blur-sm
        border-b border-white
        py-2 px-4
        flex items-center justify-between
        z-50
      "
    >
      {/* Logo */}
      <img
        src="/images/maw_whitelogo.png"
        alt="My Auntie's Wardrobe Logo"
        className="h-[50px] object-contain"
      />

      {/* Nav buttons */}
      <div className="space-x-6">
        <button
          onClick={() => scrollToSection(galleryRef)}
          className="hover:underline"
        >
          Gallery
        </button>
        <button
          onClick={() => scrollToSection(findUsRef)}
          className="hover:underline"
        >
          Find Us
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="hover:underline"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
