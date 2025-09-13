import { useEffect, useState } from 'react';
import logo from '../assets/finta-logo.svg';
import darkLogo from '../assets/finta-logo-dark.svg';
import Btn from './Btn';
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { MoonIcon, SunIcon } from './Icons';

const Navbar = () => {
  const navLinks = [
    { title: 'Founders', href: '/founders' },
    { title: 'Guide', href: '/guide' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Log In', href: '/login' },
  ];

  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }

    // If no stored theme, check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)'.matches)) {
      return 'dark';
    }

    return 'light';
  });

  const handleClick = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Update theme class and localStorage
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      // Only update if user hasn't manually set a theme
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-container px-5">
      <header className="flex items-center justify-between py-6 pl-2">
        <div className="logo-section">
          <a href="#">
            <img
              height={70}
              width={70}
              src={theme === 'dark' ? darkLogo : logo}
              alt="Finta-Logo"
            />
          </a>
        </div>
        <nav className="links-section hidden sm:flex">
          <ul className="flex items-center justify-center gap-5 text-sm">
            {navLinks.map((navLink) => (
              <li
                className="font-semibold tracking-wide duration-200 text-shadow-neutral-950 hover:text-neutral-500"
                key={navLink.href}
              >
                <a href={navLink.href}>{navLink.title}</a>
              </li>
            ))}
            <Btn text="Get started" isPrimary="true" />
            <button
              onClick={handleClick}
              className="bg relative flex size-9 cursor-pointer items-center justify-center rounded-md border border-gray-300 dark:text-slate-50"
            >
              <SunIcon className="absolute size-5 scale-100 transition-all duration-300 dark:scale-0 dark:rotate-45" />
              <MoonIcon className="absolute size-5 scale-0 transition-all duration-300 dark:scale-100 dark:rotate-0" />
            </button>
          </ul>
        </nav>

        <button
          onClick={handleClick}
          className="bg absolute top-6 right-14 flex size-6 cursor-pointer items-center justify-center rounded-md border border-gray-300 sm:hidden"
        >
          <SunIcon className="absolute size-3 scale-100 transition-all duration-300 dark:scale-0 dark:rotate-45" />
          <MoonIcon className="absolute size-3 scale-0 transition-all duration-300 dark:scale-100 dark:rotate-0" />
        </button>
        <IconMenu2
          onClick={() => setOpen(!open)}
          className="flex sm:hidden"
          size={24}
          stroke={1.5}
        />

        {open && (
          <div className="sidebar-section shadow-sandy absolute inset-x-0 top-0 z-10 m-4 flex flex-col items-center gap-3 rounded-lg bg-slate-50 p-4 pb-8 transition duration-200 sm:hidden dark:bg-neutral-800">
            <IconX
              className="absolute top-2 right-2"
              onClick={() => setOpen(!open)}
            />
            <a href="#" className="py-6">
              <img
                height={85}
                width={85}
                src={theme === 'dark' ? darkLogo : logo}
                alt="Finta-Logo"
              />
            </a>
            <ul className="mb-6 flex flex-col items-center justify-center gap-6 text-sm">
              {navLinks.map((navLink) => (
                <li
                  className="font-semibold tracking-wide duration-200 text-shadow-neutral-950 hover:text-neutral-500"
                  key={navLink.href}
                >
                  <a href={navLink.href}>{navLink.title}</a>
                </li>
              ))}
            </ul>
            <Btn text="Get started" isPrimary="true" />
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
