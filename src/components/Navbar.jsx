import { useState } from 'react';
import logo from '../assets/finta-logo.svg';
import Btn from './Btn';
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const navLinks = [
    { title: 'Founders', href: '/founders' },
    { title: 'Guide', href: '/guide' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Log In', href: '/login' },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-container px-4">
      <header className="flex items-center justify-between px-2 py-4">
        <div className="logo-section">
          <a href="#">
            <img height={70} width={70} src={logo} alt="Finta-Logo" />
          </a>
        </div>
        <nav className="links-section hidden sm:flex">
          <ul className="flex items-center gap-5 text-sm">
            {navLinks.map((navLink) => (
              <li
                className="font-semibold tracking-wide duration-200 text-shadow-neutral-950 hover:text-neutral-500"
                key={navLink.href}
              >
                <a href={navLink.href}>{navLink.title}</a>
              </li>
            ))}
            <Btn text="Get started" isPrimary="true" />
          </ul>
        </nav>
        <IconMenu2
          onClick={() => setOpen(!open)}
          className="flex sm:hidden"
          size={24}
          stroke={1.5}
        />

        {open && (
          <div className="sidebar-section shadow-sandy absolute inset-x-0 top-0 z-10 m-4 flex h-[40%] flex-col items-center gap-3 rounded-lg bg-slate-50 p-4 transition duration-200 sm:hidden">
            <IconX
              className="absolute top-4 right-4"
              onClick={() => setOpen(!open)}
            />
            <a href="#" className="py-10">
              <img height={85} width={85} src={logo} alt="Finta-Logo" />
            </a>
            <ul className="flex flex-col items-center justify-center gap-7 text-sm">
              {navLinks.map((navLink) => (
                <li
                  className="font-semibold tracking-wide duration-200 text-shadow-neutral-950 hover:text-neutral-500"
                  key={navLink.href}
                >
                  <a href={navLink.href}>{navLink.title}</a>
                </li>
              ))}
              <Btn text="Get started" isPrimary="true" />
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
