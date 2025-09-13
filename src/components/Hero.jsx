import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Btn from './Btn';
import dashboardImage from '../assets/hero-ui-v5.webp';

const Hero = () => {
  // Get current time and format as h:mm AM/PM
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  const displayHour = ((hours + 11) % 12) + 1; // converts 0-23 to 1-12

  return (
    <div className="hero-container mt-6 flex flex-col items-center justify-center px-4 md:mt-18">
      {/* badge */}
      <div className="flex items-center font-semibold">
        <a
          href="#"
          className="rounded-full border border-gray-300 bg-gray-200/70 px-3 py-1.5 text-xs tracking-wide duration-200 hover:-translate-y-1 hover:bg-slate-200 dark:bg-slate-400/50 dark:hover:bg-slate-600"
        >
          Cap table basics
          <FaArrowRight
            size={10}
            color="[#1E1F25]"
            opacity={0.5}
            className="ml-2 inline-block"
          />
        </a>
      </div>

      <div className="hero-text mt-10 max-w-2xl text-center">
        <h1 className="text-5xl leading-14 font-semibold tracking-tight text-shadow-neutral-900 max-sm:text-4xl md:text-6xl md:leading-17">
          Magically simplify accounting and taxes
        </h1>
        <p className="mx-auto my-6 max-w-xl px-4 text-center text-lg tracking-wide text-gray-700/90 dark:text-gray-300/50">
          Automated bookkeeping, effortless tax filing, real‑time insights. Set
          up in 10 mins. Back to building by{' '}
          <span>
            {displayHour}
            <span className="animate-ping">:</span>
            {minutes}
            {ampm}
          </span>
          .
        </p>
      </div>
      <div className="hero-cta flex items-center gap-2">
        <Btn text="Get started" />
        <button className="cursor-pointer rounded-lg bg-transparent px-3 py-2 text-sm font-semibold tracking-wide text-black duration-200 hover:bg-black/10 dark:text-slate-50 dark:hover:bg-slate-700/30">
          Pricing
          <FaArrowRight
            size={10}
            color="[#1E1F25]"
            opacity={0.5}
            className="ml-2 inline-block"
          />
        </button>
      </div>
      <div className="hero-short-text my-7">
        <p className="text-sm text-gray-500/80">
          Currently for US-based Delaware C-Corps.
        </p>
      </div>

      <div className="img-container relative mt-10">
        <div
          id="center-line"
          className="absolute -top-8 right-0 z-10 h-[1px] w-full bg-gradient-to-r from-neutral-200/20 via-neutral-300/50 to-neutral-200/20 dark:from-transparent dark:via-neutral-700/40 dark:to-transparent"
        ></div>

        <img
          className="rounded-xl to-40% mask-b-from-20% object-cover object-top-left shadow-2xl"
          src={dashboardImage}
          alt="Dashboard Image"
        />
      </div>
    </div>
  );
};

export default Hero;
