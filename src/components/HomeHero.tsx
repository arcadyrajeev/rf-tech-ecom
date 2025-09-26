"use client";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="w-full h-[100dvh] bg-black text-white relative overflow-hidden">
      <div className="w-full h-full flex flex-col relative px-16 md:px-[6vw] py-20 gap-10">
        <div className="relative z-5 flex flex-col items-start w-full h-full pt-[4vw]">
          <h1 className="text-4xl md:text-[4vw] font-semibold leading-tighter">
            SMART <span className="text-cyan-400">DEVICES</span> FOR <br />
            SMARTER COMMERCE
          </h1>
          <p className="text-gray-300 text-lg max-w-md mt-[3vw]">
            From POS systems to barcode scanners, discover the latest finance
            and retail solutions. <br /> <br />
            All in one trusted marketplace.
          </p>

          {/* CTA Button */}
          <button className="flex mt-auto items-center cursor-pointer gap-3 bg-cyan-700 hover:bg-cyan-600 text-white font-semibold text-xl md:text-[1.4vw] px-6 py-3 rounded-md transition">
            DOWNLOAD BROCHURE
            <ChevronsDown size={30} />
          </button>
        </div>

        <Image
          src="/images/herobanner.png"
          alt="POS Device"
          fill
          className="object-cover w-full h-full absolute top-0"
        />
      </div>
    </section>
  );
}
