import React from "react";

export function MissionSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Top Section (Image + Mission) */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/66eab063c614790046e87eef/672155f55c9d956ffa3a000a_GSOFT_5979.avif"
            alt="Team at work"
            className="rounded-2xl object-cover w-full max-w-[600px] h-[700px] md:h-[800px] shadow-lg"
            style={{ background: "#f3f3f3" }}
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center px-2 md:px-0">
          <span className="uppercase tracking-widest text-gray-700 text-base mb-6" style={{ letterSpacing: "0.1em" }}>
            OUR MISSION
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Make work simpler
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            At Workleap, we help organizations get one step closer to business excellence with our products. A few steps closer, actually.
          </p>
        </div>
      </div>

      {/* New Section: What We Do */}
      <section className="w-full max-w-7xl mx-auto py-12 md:py-24">
        <span className="uppercase tracking-widest text-gray-700 text-base mb-6 block" style={{ letterSpacing: "0.1em" }}>
          WHAT WE DO
        </span>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl leading-tight">
            We build a simple employee experience platform to elevate hybrid teams
          </h2>
          <button className="mt-8 md:mt-0 px-10 py-4 border-2 border-[#1a2257] rounded-full text-lg font-medium text-gray-900 hover:bg-[#1a2257] hover:text-white transition">
            Discover the platform
          </button>
        </div>
        <p className="text-xl text-gray-700 mb-16">
          All over the world, businesses use our software to do their best work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">20,000+</div>
            <div className="text-xl text-gray-800 mb-4">customers</div>
            <div className="text-base text-gray-700">
              We take great pride in our clients' trust. Helping them get ready for this new era of work never gets old.
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">100K+</div>
            <div className="text-xl text-gray-800 mb-4">leapers</div>
            <div className="text-base text-gray-700">
              Everyday, we enable more people to work better. We can’t help but be impressed by this number, and it's only the beginning.
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">110</div>
            <div className="text-xl text-gray-800 mb-4">countries</div>
            <div className="text-base text-gray-700">
              We had the chance to build relationships worldwide, giving us unique insights into the employee experience and its future.
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}