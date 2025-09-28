import Image from "next/image";

export default function MarketingSection() {
  return (
    <section className="w-full h-120 md:h-150 xl:h-[85dvh] relative my-12">
      <Image
        src="/images/marketing.png"
        alt="Marketing Section"
        fill
        className="object-cover w-full h-full"
      />

      <div className="w-full lg:w-[70%] absolute top-0 h-full bg-gradient-to-r from-black/80 to-transparent"></div>

      <div className="absolute w-full lg:w-[70%]  xl:w-[52%] h-full flex flex-col px-4 py-10 lg:px-8   lg:py-20 xl:py-24">
        <h1 className="font-bold text-white text-4xl md:text-[5rem] lg:text-[300%] xl:text-[4.2vw] leading-[1.1]">
          Everything Your Store Needs, All in One Place
        </h1>
        <p className="mt-30 lg:mt-20 xl:mt-10 text-md md:text-3xl font-medium lg:font-normal lg:text-[150%] xl:text-[1.6vw]">
          From POS machines to barcode scanners, explore a complete range of
          reliable commerce and finance devices—trusted by retailers, cafes, and
          enterprises alike.
        </p>

        <h2 className="mt-auto font-bold text-2xl md:text-[3rem] lg:text-[200%] xl:text-4xl text-white">
          GET UPTO{" "}
          <span className="text-yellow-300 text-5xl md:text-[5rem] lg:text-[200%] xl:text-[4vw]">
            50% Off
          </span>
        </h2>
      </div>
    </section>
  );
}
