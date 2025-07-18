import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';

const About = () => {
  return (
    <>
        <section id="about" className="flex flex-col bg-[#3E7D7B] text-white">
        <div className="max-w-6xl mx-auto py-32">
          <h1 className="text-6xl font-bold mb-20">About Me</h1>
          <div className="flex flex-cols-2 gap-32">
            <div className="justify-items-center">
                <div className="flex items-center justify-center">
                  <div className="relative h-[30rem] w-72 bg-[#fceae5] hexagon "></div>
                  <img
                    src="./images/2.webp"
                    alt=""
                    className="absolute h-96 w-56 hexagon"
                  />
                </div>
              </div>
            <div>
              <div className="max-w-[50rem] mb-10">
                <p className="leading-loose">
                  Hi! I am Michael John Dacillo Kaharap ko sa jeep ang isang ale
                  Nagrorosaryo, mata n'ya'y nakapikit Pumara sa may kumbento "Sa
                  babaan lang po", sabi ng tsuper, "kase may nanghuhuli" Mura pa
                  rin nang mura ang ale Banal na aso, santong kabayo Natatawa
                  ako, hi-hi-hi-hi Banal na aso, santong kabayo Natatawa ako,
                  hi-hi-hi-hi Sa 'yo
                </p>
              </div>
              <div className="flex gap-20">
                <div className="max-w-80">
                  <h4 className="text-3xl font-semibold mb-4">Education</h4>
                  <div className="flex gap-2 mb-4">
                    <FaArrowCircleRight className="text-2xl" />
                    <div>
                      <p>2022 - Bachelor of Science in Computer Science</p>
                      <small>Bicol University Polangui</small>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <FaArrowCircleRight className="text-2xl" />
                    <div>
                      <p>2024 - Java Programming</p>
                      <small>NRG Info-Tech Institute INC.</small>
                    </div>
                  </div>
                </div>
                <div className="max-w-80">
                  <h4 className="text-3xl font-semibold mb-4">Hobbies</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Racket Games</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Speed Cubing wihtout speed</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Watching Animes</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Sleeping in my Dreams</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Singing with Discuting Voice</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;