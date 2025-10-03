"use client";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="w-full h-[90vh] md:h-[100vh] bg-black text-white relative overflow-hidden">
      <div className="w-full h-full flex flex-col relative p-10 py-14 md:py-20 md:px-[6vw] md:py-20 gap-10">
        <div className="relative z-5 flex items-center flex-col mt-8 md:items-start w-full lg:w-[60%] h-full pt-[4vw]">
          <h1 className="text-[2rem] md:text-[3rem] xl:text-[4vw]  leading-tight md:text-left text-center">
            SMART <span className="text-cyan-400">DEVICES</span> FOR SMARTER
            COMMERCE
          </h1>
          <p className="text-gray-100 text-xl text-justify xl:text-[1.2rem] w-full md:w-[55%] lg:w-full xl:w-[50%] mt-60 md:mt-[3vw] leading-tight">
            From POS systems to barcode scanners, discover the latest finance
            and retail solutions. All in one trusted marketplace.
          </p>

          {/* CTA Button */}
          <button className="flex mt-10 md:mt-[50vh] xl:mt-auto items-center cursor-pointer gap-3 bg-cyan-700 hover:bg-cyan-600 text-white font-semibold text-md md:text-[2rem] xl:text-[1.2vw] px-6 py-3 rounded-full transition">
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
      <div className="w-full lg:w-[60%] absolute top-0 h-full bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent"></div>
    </section>
  );
}
