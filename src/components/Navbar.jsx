import logo from "../assets/finta-logo.svg";
import Btn from "./Btn";

const Navbar = () => {
  const navLinks = [
    { title: "Founders", href: "/founders" },
    { title: "Guide", href: "/guide" },
    { title: "Pricing", href: "/pricing" },
    { title: "Log In", href: "/login" },
  ];

  return (
    <div className="navbar-container px-4">
      <header className="flex justify-between items-center py-4 px-2">
        <div className="logo-section">
          <a href="#">
            <img height={70} width={70} src={logo} alt="Finta-Logo" />
          </a>
        </div>
        <nav className="links-section ">
          <ul className="flex gap-5 text-sm items-center">
            {navLinks.map((navLink) => (
              <li
                className="tracking-wide font-semibold text-shadow-neutral-950 hover:text-neutral-500 duration-200"
                key={navLink.href}
              >
                <a href={navLink.href}>{navLink.title}</a>
              </li>
            ))}
            <Btn text="Get started" isPrimary="true" />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
