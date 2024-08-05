import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
   return (
      <div name="home" className="bg-[#0a192f] w-full h-screen">
         {/* container */}
         <div className=" text-white max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p>Hi,my name is </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Arnold Zhang</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer.</h2>
            <p className="text-[#8892b0] py-4 max-w-[900px] text-xl">Hello! I'm Arnold Zhang, I'm now study Master of Information System in Torrens University. I have a bounch of skills and some project, you can scroll down or click the button to see my skills and projects. </p>
            <div>
               <Link to="skills" smooth={true} duration={500}>
                  <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400">
                     View More
                     <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3" />
                     </span>
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Home;
