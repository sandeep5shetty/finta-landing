import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="app-container min-h-screen [background:radial-gradient(125%_115%_at_50%_0%,#fff_6.32%,#E0F0FF_49.28%,_#e7Effd_78.68%,#FFF_100%)] dark:text-slate-50 dark:[background:radial-gradient(125%_115%_at_50%_0%,#1c1c1e_6.32%,#121214_49.28%,_#18181a_78.68%,#1c1c1e_100%)]">
      <div className="layout-container relative mx-auto h-screen max-w-5xl">
        <div
          id="left-line"
          className="absolute top-0 -left-2 z-10 h-full w-[2px] bg-gradient-to-b from-neutral-200 via-neutral-300/50 to-transparent dark:from-neutral-800/50 dark:via-neutral-700/40 dark:to-transparent"
        ></div>

        <div
          id="right-line"
          className="absolute top-0 -right-2 z-10 h-full w-[2px] bg-gradient-to-b from-neutral-200 via-neutral-300/50 to-transparent dark:from-neutral-800/50 dark:via-neutral-700/40 dark:to-transparent"
        ></div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
