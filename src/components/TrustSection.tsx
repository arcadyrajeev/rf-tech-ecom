export default function TrustSection() {
  return (
    <section className="w-full bg-gradient-to-r from-teal-700 to-cyan-600 text-white py-10">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-[3vw] font-semibold mb-10">
          TRUSTED BY MILLIONS
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 mt-[6vw]">
          {/* Businesses Onboard */}
          <div>
            <p className="text-5xl md:text-[5vw] font-medium">100K+</p>
            <p className="mt-2 text-lg text-gray-200">Businesses Onboard</p>
          </div>

          {/* Units Sold */}
          <div>
            <p className="text-5xl md:text-[5vw] font-medium">1M+</p>
            <p className="mt-2 text-lg text-gray-200">Units Sold</p>
          </div>
        </div>
      </div>
    </section>
  );
}
