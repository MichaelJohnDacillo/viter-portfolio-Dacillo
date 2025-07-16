import React from 'react'

const Projects = () => {
  return (
    <>
        <div id="projects" className="flex flex-col">
        <div className="max-w-6xl mx-auto py-32 ">
          <p className="font-bold text-5xl mb-10 text-[#3E7D7B]">My Projects</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="group w-80 h-96 shadowd-2xl border-2 rounded-xl overflow-hidden">
              <img
                src="./images/1x1.png"
                alt=""
                className="h-44 w-full group-hover:scale-105 transition-all duration-500"
              />
              <p className="text-md my-4 mx-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                veritatis eligendi omnis beatae. Labore cupiditate aut
                voluptatibus sunt a voluptatem?.
              </p>
              <a href="#" className="text-gray-500 hover:text-[#F1CCC2] mx-4">
                Read more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;