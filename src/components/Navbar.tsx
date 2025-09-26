"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-99 bg-black text-white border-b border-cyan-500">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          <Image
            src="/images/RFTech.svg"
            alt="RF-Tech Logo"
            height={40}
            width={120}
          />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 ">
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
          <li className="relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer"
            >
              CATEGORIES <ChevronDown size={20} />
            </button>
            {isCategoriesOpen && (
              <div className="absolute top-[100%] z-10 left-0 mt-2 bg-white text-black rounded shadow-lg p-3">
                <Link
                  href="/categories/pos"
                  className="block px-3 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  POS Devices
                </Link>
                <Link
                  href="/categories/scanners"
                  className="block px-3 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  Scanners
                </Link>
                <Link
                  href="/categories/printers"
                  className="block px-3 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  Printers
                </Link>
              </div>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 hover:text-cyan-400"
            >
              MORE <ChevronDown size={20} />
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
    </header>
  );
}
