"use client";
import Link from "next/link";

import Image from "next/image";
import { Facebook, Youtube, Instagram, Linkedin, Twitter } from "lucide-react";

// Footer link data
const categories = [
  { label: "All Products", href: "/products" },
  { label: "Handheld Computer", href: "/categories/handheld" },
  { label: "Scanners", href: "/categories/scanners" },
  { label: "Printers", href: "/categories/printers" },
  { label: "Software & Services", href: "/categories/software" },
  { label: "Retail accessories", href: "/categories/accessories" },
];

const navigation = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Shipping and Delivery Policy", href: "/shipping" },
  { label: "Cancellation and Refund Policy", href: "/refunds" },
  { label: "Track Your Order", href: "/track-order" },
];

const support = [
  { label: "Contact Support", href: "/support" },
  { label: "Request a Repair", href: "/support/repair" },
  { label: "Product Warranty", href: "/support/warranty" },
  { label: "Developer Portal", href: "/developer" },
  { label: "Report a Security Vulnerability", href: "/support/security" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-teal-700 to-cyan-600 text-white pt-12">
      <div className="w-full flex flex-col lg:flex-row justify-between mx-auto px-6 py-12 gap-12">
        {/* Logo + Newsletter */}
        <div className="w-full lg:w-[30%] flex flex-col">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            <Image
              src="/images/RFTech.svg"
              alt="RF-Tech Logo"
              height={50}
              width={150}
            />
          </Link>
          <p className="mb-4 mt-[3vw]">Get our latest offers right to you</p>

          {/* Subscribe Box */}
          <div className="grid grid-cols-3  w-full border border-white  ">
            <input
              type="email"
              placeholder="Email here"
              className="flex col-span-2 px-4 py-2 rounded-l border-none text-gray-200"
            />
            <button className="flex justify-self-end  bg-black  items-center justify-center text-white px-4 py-2 font-semibold rounded-r hover:bg-gray-800">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  w-full lg:w-[60%] gap-30">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-300">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-black">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-300">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-black">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-300">Support</h3>
            <ul className="space-y-2 text-sm">
              {support.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-black">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
          <p>©2025 RFTech Private Limited. All rights reserved</p>
          {/* Social Icons */}
          <div className="flex gap-5 mt-4 md:mt-0">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 hover:text-black cursor-pointer" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="w-5 h-5 hover:text-black cursor-pointer" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 hover:text-black cursor-pointer" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-5 h-5 hover:text-black cursor-pointer" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5 hover:text-black cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
