import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import realEstate from "../assets/projects/realestate.jpg";
import failingsand from "../assets/projects/failingsand.png";
import { projectsInfo } from "../constants/index";

const Projects = () => {
   return (
      <div name="projects" className="flex pt-36 w-full text-gray-300 bg-[#0a192f]">
         <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full">

            <div className="pb-2">
               <p className="text-4xl font-vold inline border-b-4 text-gray-300 border-blue-300">Projects</p>
               <p className="py-2">Check out some of my recent projects</p>
            </div>

            {/* container of all card */}
            <div className="flex flex-col items-center gap-5 mr-40">
               {/* Grid Item */}
               {projectsInfo.map((project, index) => {
                  return (
                     <div key={index} className="flex gap-5 lg:flex-row flex-col">
                        {/* Image */}
                        <div className=" container rounded-md mx-auto content-div w-100 h-60 bg-cover" style={{ backgroundImage: `url(${project.image})` }}></div>

                        {/* Introduction */}
                        <div className="grow flex flex-col ml-5">
                           {/* title */}
                           <div className="text-3xl">
                              <p>{project.title}</p>
                           </div>

                           {/* description */}
                           <p className="mt-5">{project.description}</p>

                           {/* Link */}
                           <a href={project.link} className="mr-auto mt-5" target="_blank">
                              {project.link}
                           </a>
                              
                           {/* Github Link */}
                           <a href={project.githublink} className="mr-auto mt-5" target="_blank">
                              Github page: {project.githublink}
                           </a>
                        </div>

                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Projects;
