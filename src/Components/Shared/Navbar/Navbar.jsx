import { Link } from "react-router-dom";
import homeLogo from "../../../assets/icons/Umrah-Logo-Blue.png";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav
        className="
        font-semibold
          flex flex-wrap
          items-center 
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          shadow-lg
          shadow-gray-800
          fixed
          z-20
        "
      >
        <div>
          <Link to="/">
            <img
              className=" md:p-2 lg:w-[80px] md:w-[70px] sm: w-[60px]"
              src={homeLogo}
              alt=""
            />
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          onClick={toggleMenu}
          className="h-6 w-6 cursor-pointer lg:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
          id="menu"
        >
          <ul
            className="
              pt-4
              text-sm text-gray-700
              lg:flex
              lg:justify-between 
              lg:pt-0
              gap-3"
          >
            <li>
              <a
                className="md:p-4 py-2 block uppercase hover:text-[#539ce6] "
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <Link to="/aboutUs" className="md:p-4 py-2 uppercase  hover:text-[#539ce6] flex items-center relative">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/umrah-packages" className="md:p-4 py-2 block uppercase hover:text-[#539ce6]">
                Umrah Packages
              </Link>
            </li>
            <li>
              <a className="md:p-4 py-2 block uppercase hover:text-[#539ce6]">
                Blog
              </a>
            </li>
            <li>
            <Link to="/contact"
                className="lg:flex md:hidden sm: hidden mt-1 px-4 py-3 uppercase 
                  text-white bg-[#25476a] hover:bg-[#21a1eb] hover:text-white rounded-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <a className="lg:hidden md:block sm: block md:p-4 py-2 uppercase hover:text-[#539ce6]">
              Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
