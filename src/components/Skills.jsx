import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactIcon from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="pt-36 h-full w-full bg-[#0a192f] text-white">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/* the container of all icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* small container of icon and text */}
          <div className="shadow-md shadow-[]">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[]">
            <img src={CSS} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[]">
            <img src={JavaScript} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[]">
            <img src={ReactIcon} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-[]">
            <img src={GitHub} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[]">
            <img src={Node} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">NODE JS</p>
          </div>

          <div className="shadow-md shadow-[]">
            <img src={Mongo} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">MONGO DB</p>
          </div>

          <div className="shadow-md shadow-[]">
            <img src={AWS} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">AWS </p>
          </div>

          <div className="shadow-md shadow-[]">
            <img src={Tailwind} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">Tailwind </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
