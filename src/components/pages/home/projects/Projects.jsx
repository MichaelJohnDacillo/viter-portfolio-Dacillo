import React from 'react'
import CardsProject from '../../../partials/CardsProject';

const Projects = () => {
  return (
    <>
        <section id="projects" className="flex flex-col">
        <div className="max-w-6xl mx-auto py-32 ">
          <p className="font-bold text-5xl mb-10 text-[#3E7D7B]">My Projects</p>
          <div className="grid grid-cols-3 gap-8">
            <CardsProject
            image={"./images/3.webp"} alt={"Picture of a system"} title={"Resort Management System"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim in ipsam voluptates quis esse."} href={"/project1"}/>
            <CardsProject
            image={"./images/4.webp"} alt={"Picture of a system"} title={"Barangay Management System"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim in ipsam voluptates quis esse."} href={"/project2"}/>
            <CardsProject
            image={"./images/3.webp"} alt={"Picture of a system"} title={"Project Title"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus enim in ipsam voluptates quis esse."} href={"/project3"}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;