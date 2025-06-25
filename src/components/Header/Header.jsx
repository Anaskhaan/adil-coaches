import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed w-full z-50 transition-all duration-300
      ${
        isScrolled ? "bg-gray-lightest shadow-md py-2" : "bg-gray-lightest py-4"
      }
      ${mobileMenuOpen ? "bg-gray-lightest" : ""}
    `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-darkest">
                ADIL COACHES
              </span>
              <span className="text-xs text-secondary">
                Luxury Travel Experience
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `
              relative font-medium text-gray-darker hover:text-primary-darkest transition-colors
              ${isActive ? "text-primary-darkest font-semibold" : ""}
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary
              after:transition-all after:duration-300 hover:after:w-full
              ${isActive ? "after:w-full" : ""}
            `}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `
              relative font-medium text-gray-darker hover:text-primary-darkest transition-colors
              ${isActive ? "text-primary-darkest font-semibold" : ""}
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary
              after:transition-all after:duration-300 hover:after:w-full
              ${isActive ? "after:w-full" : ""}
            `}
          >
            About Us
          </NavLink>
          <NavLink
            to="/routes"
            className={({ isActive }) => `
              relative font-medium text-gray-darker hover:text-primary-darkest transition-colors
              ${isActive ? "text-primary-darkest font-semibold" : ""}
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary
              after:transition-all after:duration-300 hover:after:w-full
              ${isActive ? "after:w-full" : ""}
            `}
          >
            Our Routes
          </NavLink>
          <NavLink
            to="/fleet"
            className={({ isActive }) => `
              relative font-medium text-gray-darker hover:text-primary-darkest transition-colors
              ${isActive ? "text-primary-darkest font-semibold" : ""}
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary
              after:transition-all after:duration-300 hover:after:w-full
              ${isActive ? "after:w-full" : ""}
            `}
          >
            Our Fleet
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `
              relative font-medium text-gray-darker hover:text-primary-darkest transition-colors
              ${isActive ? "text-primary-darkest font-semibold" : ""}
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary
              after:transition-all after:duration-300 hover:after:w-full
              ${isActive ? "after:w-full" : ""}
            `}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`bg-primary-darkest block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-primary-darkest block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1.5 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-primary-darkest block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block ml-6">
          <a
            href="tel:+1234567890"
            className="flex items-center bg-secondary hover:bg-secondary-dark text-gray-lightest px-4 py-2 rounded-lg transition-colors shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Book Now
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-gray-lightest shadow-lg`}
      >
        <nav className="container mx-auto px-4 py-3">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `
                  block py-2 px-3 font-medium rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-primary-lightest text-primary-darkest"
                      : "text-gray-darker hover:bg-gray-lighter"
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `
                  block py-2 px-3 font-medium rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-primary-lightest text-primary-darkest"
                      : "text-gray-darker hover:bg-gray-lighter"
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/routes"
                className={({ isActive }) => `
                  block py-2 px-3 font-medium rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-primary-lightest text-primary-darkest"
                      : "text-gray-darker hover:bg-gray-lighter"
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Routes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fleet"
                className={({ isActive }) => `
                  block py-2 px-3 font-medium rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-primary-lightest text-primary-darkest"
                      : "text-gray-darker hover:bg-gray-lighter"
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Fleet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `
                  block py-2 px-3 font-medium rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-primary-lightest text-primary-darkest"
                      : "text-gray-darker hover:bg-gray-lighter"
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li className="pt-2">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center bg-secondary hover:bg-secondary-dark text-gray-lightest px-4 py-2 rounded-lg transition-colors shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
