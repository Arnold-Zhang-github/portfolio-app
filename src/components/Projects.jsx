import React from "react";

import { projectsInfo } from "../constants/index";

const Projects = () => {
   return (
      <div name="projects" className=" text-gray-300 bg-[#0a192f]">
         <div className="max-w-[1000px] mx-auto p-10 flex flex-col justify-center">
            <div className="pb-2">
               <p className="text-4xl font-vold inline border-b-4 text-gray-300 border-blue-300">
                  Projects
               </p>
               <p className="py-2">Check out some of my recent projects</p>
            </div>

            {/* container of all card */}
            <div className="flex flex-col items-center gap-5 mr-4">
               {/* Grid Item */}
               {projectsInfo.map((project, index) => {
                  return (
                     <div key={index} className="flex gap-5 lg:flex-row flex-col">
                        {/* Image */}

                        <a href={project.link} target="_blank" className="lg:w-1/3">
                           {" "}
                           <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover "
                           />
                        </a>

                        {/* Introduction */}
                        <div className="flex flex-col ml-5 lg:w-2/3 ">
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
