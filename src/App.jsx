import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="app-container min-h-screen [background:radial-gradient(125%_115%_at_50%_0%,#fff_6.32%,#E0F0FF_49.28%,_#e7Effd_78.68%,#FFF_100%)]">
      <div className="layout-container max-w-5xl mx-auto h-screen relative">
        <div
          id="left-line"
          className="w-[2px] h-full z-10 absolute bg-gradient-to-b
           from-neutral-200 via-neutral-300/50 to-transparent 
           -left-2 top-0"
        ></div>
        <div
          id="right-line"
          className="w-[2px] h-full z-10 absolute bg-gradient-to-b
           from-neutral-200 via-neutral-300/50 to-transparent 
           -right-2 top-0"
        ></div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
