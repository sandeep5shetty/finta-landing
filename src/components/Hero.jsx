import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Btn from "./Btn";
import dashboardImage from "../assets/hero-ui-v5.webp"

const Hero = () => {
  // Get current time and format as h:mm AM/PM
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  const displayHour = ((hours + 11) % 12 + 1); // converts 0-23 to 1-12

  return (
    <div className="hero-container flex justify-center flex-col items-center mt-18 px-4">
      {/* badge */}
      <div className="flex items-center  font-semibold">
        <a
          href="#"
          className="bg-gray-200/70 border border-gray-300 rounded-full hover:bg-slate-200 hover:-translate-y-1 px-3 py-1.5 duration-200 tracking-wide text-xs"
        >
          How to work with lawyers
          <FaArrowRight
            size={10}
            color="[#1E1F25]"
            opacity={0.5}
            className="inline-block ml-2"
          />
        </a>
      </div>

      <div className="hero-text max-w-2xl text-center mt-10">
        <h1 className="text-6xl font-semibold tracking-tight leading-17 text-shadow-neutral-900">
          Magically simplify accounting and taxes
        </h1>
        <p className="text-lg text-gray-700/90 max-w-xl mx-auto text-center px-4 tracking-wide my-6">
          Automated bookkeeping, effortless tax filing, real‑time insights. Set
          up in 10 mins. Back to building by{" "}
          <span>{displayHour}<span className="animate-ping">:</span>{minutes}{ampm}</span>.
        </p>
      </div>
      <div className="hero-cta flex items-center gap-2">
        <Btn text="Get started"/>
        <button className=" tracking-wide text-black px-3 py-2 font-semibold text-sm rounded-lg bg-transparent hover:bg-black/10 cursor-pointer duration-200">Pricing
        <FaArrowRight
            size={10}
            color="[#1E1F25]"
            opacity={0.5}
            className="inline-block ml-2"
          />
        </button>
      </div>
      <div className="hero-short-text my-7">
        <p className="text-sm text-gray-500/80">Currently for US-based Delaware C-Corps.</p>
      </div>

      <div className="img-container relative mt-10">

        <div
          id="center-line"
          className="h-[2px] w-full  z-10 absolute bg-gradient-to-r
           from-neutral-200/20 via-neutral-300/50 to-neutral-200/20
           right-0 -top-8"
        ></div>

        <img
        className="rounded-xl shadow-2xl object-cover object-top-left mask-b-from-20% to-40%"
        src={dashboardImage} alt="Dashboard Image" />

      </div>
    </div>
  );
};

export default Hero;
