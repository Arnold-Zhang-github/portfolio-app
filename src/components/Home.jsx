import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className=" text-white max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi,my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Arnold Zhang
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          dolores. Ex facere ad voluptas dolor excepturi error animi libero
          quasi, labore fugit ea, vitae nobis dicta dignissimos odio cum a?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam earum, labore eos quibusdam explicabo mollitia voluptatum quisquam veniam molestiae nulla esse nostrum aliquam qui voluptate molestias rem tempore. Maiores, autem.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
