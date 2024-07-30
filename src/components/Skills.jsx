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
import TypeScript from "../assets/typescript.png";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandDocker } from "react-icons/tb";

const Skills = () => {
   return (
      <div name="skills" className="pt-36 h-full w-full bg-[#0a192f] text-white">
         {/* container */}
         <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center ">
            <div>
               <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
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
                  <p className="my-4">Github</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <img src={Node} alt="HTML icon" className="w-20 mx-auto" />
                  <p className="my-4">Nodejs</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <img src={Mongo} alt="HTML icon" className="w-20 mx-auto" />
                  <p className="my-4">Mongodb</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <img src={AWS} alt="HTML icon" className="w-20 mx-auto" />
                  <p className="my-4">AWS </p>
               </div>

               <div className="shadow-md shadow-[]">
                  <img src={Tailwind} alt="HTML icon" className="w-20 mx-auto" />
                  <p className="my-4">Tailwind </p>
               </div>

               <div className="shadow-md shadow-[]">
                  <SiTypescript className="w-20 h-20 mx-auto" />
                  <p className="my-4">TypeScript</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <RiNextjsLine className="w-20 h-20 mx-auto" />
                  <p className="my-4">Nextjs</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <SiMui className="w-20 h-20 mx-auto" />
                  <p className="my-4">Material UI</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <FaBootstrap className="w-20 h-20 mx-auto" />
                  <p className="my-4">Bootstrap</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <FaPython className="w-20 h-20 mx-auto" />
                  <p className="my-4">Python</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <SiMysql className="w-20 h-20 mx-auto" />
                  <p className="my-4">MySql</p>
               </div>

               <div className="shadow-md shadow-[]">
                  <TbBrandDocker className="w-20 h-20 mx-auto" />
                  <p className="my-4">Docker</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
