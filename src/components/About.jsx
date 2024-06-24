import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid-cols-2 gap-8">
          <div className="sm:text-right pd-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              About
            </p>
          </div>

          <div></div>

          <div className="mt-10 max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="text-4xl font-bold">
              <p>Hi. I'm Arnold nice to meet you. Please take a look around</p>
            </div>

            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                nesciunt voluptate, dolore, recusandae consequatur voluptatibus
                hic quidem velit, omnis saepe eos error unde eveniet. Ipsum hic
                laborum commodi voluptatem omnis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
