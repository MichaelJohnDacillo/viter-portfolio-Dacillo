import React from 'react'

const Banner = () => {
  return (
    <>
        {/* Banner */}
              <div id="banner" className="flex flex-col">
                <div className="max-w-6xl mx-auto py-40">
                  <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-96">
                      <div className="flex flex-col">
                        <span className="text-lg mb-5 font-semibold">
                          Future Front-end Developer charoott
                        </span>
                        <h className="font-semibold text-6xl mb-5 text-[#3E7D7B]">
                          Hello I'm
                          <span >
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
                            <button className="bg-[#F1CCC2] rounded-full text-md font-bold py-2 px-8 ring-1 ring-[#3E7D7B] ring-offset-2 w-40">Projects</button>
                            <button className="rounded-full text-md font-bold py-2 px-8 ring-2 ring-[#F1CCC2] ring-offset-2 w-40">Contact Me</button>
                        </div>
                      </div>
                        
                        <img src="./images/1x1.png"
                        className="size-96 rounded-full  transition-all duration-1000 shadow-2xl shadow-fuchsia-400 "
                        alt=""/>
        
                      
                    </div>
                  </div>
                  <div className="flex justify-end">
                    
                  </div>
                </div>
              </div>
    </>
  );
};

export default Banner;