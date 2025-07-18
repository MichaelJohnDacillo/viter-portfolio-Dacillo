import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* Banner */}
      <section id="banner" className="flex flex-col">
        <div className="max-w-6xl mx-auto py-40">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-96">
              <div className="flex flex-col">
                <span className="text-lg mb-5 font-semibold">
                  Future Front-end Developer charoott
                </span>
                <h className="font-semibold text-6xl mb-5 text-[#3E7D7B]">
                  Hello I'm
                  <span>
                    <br />
                    Michael John Dacillo
                  </span>
                </h>
                <p className="mb-5">
                  Passionate about continuous learning, I thrive on expanding my
                  knowledge and skills to achieve greater creative and
                  professional heights.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/MichaelJohnDacillo"
                    target="GitHub"
                    className="text-center bg-[#F1CCC2] rounded-full text-md font-bold py-2 px-8 ring-1 ring-[#3E7D7B] ring-offset-2 w-40 hover:shadow-2xl hover:text-[#3E7D7B]"
                  >
                    Projects
                  </a>
                  <button className="rounded-full text-md font-bold py-2 px-8 ring-2 ring-[#F1CCC2] ring-offset-2 w-40 hover:shadow-2xl hover:text-[#3E7D7B]">
                    <Link to="/contact">Contact Me</Link>
                  </button>
                </div>
              </div>

              <div className="justify-items-center">
                <div className="flex items-center">
                  <div className="relative size-[30rem] bg-[#6f9e9d] rounded-full shadow-2xl shadow-[#ff9578]"></div>
                  <img
                    src="./images/1.webp"
                    alt=""
                    className="absolute size-[30rem] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;
