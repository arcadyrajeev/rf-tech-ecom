"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  MapPin,
} from "lucide-react";

const categories = [
  { name: "POS Systems", link: "#" },
  { name: "Payment Devices", link: "#" },
  { name: "Barcode/ QR Scanners", link: "#" },
  { name: "Receipt & Label Printers", link: "#" },
  { name: "Cash Handling Devices", link: "#" },
  { name: "Handheld Computers", link: "#" },
  {
    name: "Retail & Store Accessories",
    link: "#",
  },
  { name: "Software & Services", link: "#" },
  { name: "Bundles & Kits", link: "#" },
];

const more = [
  { name: "About", link: "#" },
  { name: "Contact", link: "#" },
  { name: "Support", link: "#" },
];

export default function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Refs for dropdowns
  const categoriesRef = useRef<HTMLLIElement>(null);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`w-full overflow-hidden flex flex-col bg-gray-800 fixed top-0 z-99 transition-[height] duration-300 ease-in-out ${
        isCategoriesOpen ? "h-60" : "h-16"
      }`}
    >
      <nav className="w-full  bg-black text-white border-b border-cyan-500 mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex gap-10 items-center">
          <Link href="/" className="text-2xl font-bold text-cyan-400">
            <Image
              src="/images/RFTech.svg"
              alt="RF-Tech Logo"
              height={40}
              width={120}
            />
          </Link>

          <div className="w-[16vw] hidden h-full lg:flex flex-col">
            <p className="flex gap-1 text-md lg:text-[1vw]">
              <MapPin size={20} />
              Kanke,Ranchi, Jharkhand
            </p>
            <p className="font-bold text-lg lg:text-[1.2vw] pl-1">
              Update your Address
            </p>
          </div>
        </div>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-8 ">
          <li>
            <Link href="/" className="hover:text-cyan-400 cursor-pointer">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/store" className="hover:text-cyan-400 cursor-pointer">
              STORE
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-cyan-400 cursor-pointer">
              BLOG
            </Link>
          </li>
          <li className="relative" ref={categoriesRef}>
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer"
            >
              CATEGORIES{" "}
              <ChevronDown
                size={20}
                className={`transition duration-300 ease-in-out ${
                  isCategoriesOpen ? "rotate-[180deg] " : ""
                }`}
              />
            </button>
          </li>
          <li className="relative" ref={moreRef}>
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex cursor-pointer items-center gap-1 hover:text-cyan-400"
            >
              MORE{" "}
              <ChevronDown
                size={20}
                className={`transition duration-300 ease-in-out ${
                  isMoreOpen ? "rotate-[180deg] " : ""
                }`}
              />
            </button>
            {isMoreOpen && (
              <div className="absolute top-[100%] z-10 left-0 mt-2 bg-white text-black rounded shadow-lg p-3">
                <Link
                  href="/about"
                  className="block px-3 py-1 hover:bg-gray-100"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-1 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl">
          <button className="hover:text-cyan-400">
            <Search size={22} />
          </button>
          <button className="hover:text-cyan-400">
            <Heart size={22} />
          </button>
          <button className="hover:text-cyan-400 relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-2 bg-red-500 text-xs px-1 rounded-full">
              2
            </span>
          </button>
          <button className="hover:text-cyan-400">
            <User size={22} />
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-3 gap-6 p-8">
        {categories.map((items, idx) => (
          <Link
            key={idx}
            href={items.link}
            className="w-fit text-white hover:text-cyan-300"
          >
            {items.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
