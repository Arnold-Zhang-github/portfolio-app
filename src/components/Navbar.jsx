import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiGmail } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/AZ.png";
import { Link } from "react-scroll";

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const handleClick = () => setNav(!nav);

   return (
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white">
         <div>
            <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
         </div>

         {/* menu */}

         <ul className="hidden md:flex text-white">
            <li>
               <Link to="home" smooth={true} duration={500}>
                  AboutMe
               </Link>
            </li>
            
            <li>
               <Link to="skills" smooth={true} duration={500}>
                  Skills
               </Link>
            </li>
            <li>
               <Link to="projects" smooth={true} duration={500}>
                  Projects
               </Link>
            </li>
            <li>
               <Link to="contact" smooth={true} duration={500}>
                  Contact
               </Link>
            </li>
         </ul>

         {/* Hamburger */}
         <div onClick={handleClick} className="md:hidden text-white z-10">
            {!nav ? <FaBars /> : <FaTimes />}
         </div>

         {/* Mobile Menu */}
         <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-white"}>
            <li className="py-6 text-4xl">
               {" "}
               <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                  Home
               </Link>
            </li>
            <li className="py-6 text-4xl">
               <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                  About
               </Link>
            </li>
            <li className="py-6 text-4xl">
               {" "}
               <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                  Skills
               </Link>
            </li>
            <li className="py-6 text-4xl">
               {" "}
               <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                  Projects
               </Link>
            </li>
            <li className="py-6 text-4xl">
               {" "}
               <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                  Contact
               </Link>
            </li>
         </ul>

         {/* Social icons */}
         <div className="lg:flex fixed sm:hidden top-[35%] left-0">
            <ul>
               <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                  <a className="flex justify-between items-center w-full text-white" href="https://www.linkedin.com/in/arnold-zhang-36310a285/">
                     Linkedin <FaLinkedin size={30} />
                  </a>
               </li>
               <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                  <a className="flex justify-between items-center w-full text-white" href="https://github.com/Arnold-Zhang-github">
                     Github <FaGithub size={30} />
                  </a>
               </li>

               <Link to="contact" smooth={true} duration={500}>
                  <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                     <a className="flex justify-between items-center w-full text-white" href="/">
                        Email <HiOutlineMail size={30} />
                     </a>
                  </li>
               </Link>

               <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                  <a className="flex justify-between items-center w-full text-white" href="/">
                     Resume <BsFillPersonLinesFill size={30} />
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
