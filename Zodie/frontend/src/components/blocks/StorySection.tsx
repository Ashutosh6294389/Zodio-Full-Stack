import React from "react";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export function StorySection() {
  return (
    <div className="bg-white min-h-screen px-4 py-12 flex flex-col items-center">
      {/* Top Heading */}
      <div className="max-w-5xl w-full mx-auto mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 leading-tight">
          Our business is built on a simple belief:<br />
          There’s a better way to work
        </h1>
      </div>

      {/* Section 1: Text Left, Image Right */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        {/* Text Section */}
        <div className="flex flex-col justify-center px-2 md:px-0">
          <span className="uppercase tracking-widest text-gray-700 text-base mb-6" style={{ letterSpacing: "0.1em" }}>
            OUR STORY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            A call to build a better<br />workplace
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            Workleap was born after spending the better part of two decades asking ourselves a simple question: how can we craft software to make work simpler, kinder, and faster? Over the years, we tackled this question by focusing our energy on building great solutions to help businesses improve a crucial part of their organizations: their employee experience.
          </p>
          <p className="text-lg text-gray-700 max-w-xl">
            Our team believes that creating environments where people are set up for success is not only good for employees — it’s good for business. That’s us in a nutshell, and we are just getting started.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/66eab063c614790046e87eef/6728aca1bf64a2c2d5d3864a_GSOFT_0089.avif"
            alt="Modern workspace"
            className="rounded-2xl object-cover w-full max-w-[600px] h-[600px] md:h-[800px] shadow-lg"
            style={{ background: "#f3f3f3" }}
          />
        </div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        {/* Image Section */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="https://cdn.prod.website-files.com/66eab063c614790046e87eef/6728ad400944024306fe88e2_image%201%20(2)%20(1).avif"
            alt="Team collaboration"
            className="rounded-2xl object-cover w-full max-w-[600px] h-[600px] md:h-[800px] shadow-lg"
            style={{ background: "#f3f3f3" }}
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center px-2 md:px-0 order-1 md:order-2">
          <span className="uppercase tracking-widest text-gray-700 text-base mb-6" style={{ letterSpacing: "0.1em" }}>
            OUR VALUES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Our firm beliefs
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mb-16">
            As a company, we live by a few principles:
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            ✅ We listen to understand
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            ✅ We own up
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
           ✅ We tell it like it is
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-4">
            ✅ We win as one team
          </p>
          <p className="text-lg text-gray-700 max-w-xl mb-16">
            ✅ We take the leap
          </p>
          <p className="text-lg text-gray-700 max-w-2xl">
            In other words, we make sure to build the right stuff, keep things honest, and never get too comfortable. We do all that as one team, sharing triumphs and mistakes along the way.

          </p>
        </div>
      </div>
    </div>
  );
}