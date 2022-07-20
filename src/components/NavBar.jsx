/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { SiUpwork } from "react-icons/si";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/288464302_1109310899926473_1338349196678372267_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ekv_mlmNxXYAX8GwkJ-&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT_I38hq0v82lU_hRuKeygSsLkOtgUSlPpO_Yuk9nqBEqg&oe=62DC3B23"
          alt="logo"
          onClick={() => {
            window.location = "https://www.facebook.com/davit.vashakidze.52";
          }}
          style={{ width: "55px", borderRadius: "50%" }}
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:font-bold">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li
            onClick={() =>
              (window.location =
                "https://www.linkedin.com/in/dadu-vashakidze-7a5655227/")
            }
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"
          >
            <a className="flex justify-between items-center w-full text-gray-300">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li
            onClick={() => (window.location = "https://github.com/vashaka")}
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]"
          >
            <a className="flex justify-between items-center w-full text-gray-300">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            onClick={() =>
              (window.location =
                "https://mail.google.com/mail/u/0/#search/datodavit07%40gmail.com")
            }
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]"
          >
            <a className="flex justify-between items-center w-full text-gray-300">
              Email <HiOutlineMail size={30} />
            </a>
          </li>{" "}
          <li
            onClick={() => (window.location = "https://github.com/vashaka")}
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]"
          >
            <a className="flex justify-between items-center w-full text-gray-300">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
