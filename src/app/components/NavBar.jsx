"use client";

export default function Navbar() {
  return (
    <nav
      className="
      fixed top-0 left-0 w-full
      bg-black text-white
      py-4
      flex justify-center items-center
      border-b border-white
      z-50
    "
    >
      <img
        src="/images/maw_whitelogo.png"
        alt="My Auntie's Wardrobe Logo"
        className="h-[60px] object-contain"
      />
    </nav>
  );
}
