import React from 'react'
import Header from '../../partials/Header';
import Banner from './banner/Banner';
import { FaArrowCircleRight } from 'react-icons/fa';
import Projects from './projects/Projects';
import Footer from '../../partials/Footer';

const Home = () => {
  return (
    <>
    <Header />

    <Banner/>

      {/* About Me */}
      <section id="about" className="flex flex-col bg-[#3E7D7B] text-white">
        <div className="max-w-6xl mx-auto py-32">
          <h1 className="text-6xl font-bold mb-20">About Me</h1>
          <div className="flex flex-cols-2 gap-32">
            <div className="rounded-lg p-2 bg-[#3E7D7B] ring-2 ring-[#F1CCC2] ring-offset-1">
              <img src="./images/2.jpg" alt="" className="w-72 rounded-lg" />
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
                      <p>Suntok</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Sipa</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Tadyak</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Siko</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Sapak</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Sampal</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Brutality</p>
                    </div>
                    <div className="flex gap-2">
                      <FaArrowCircleRight className="text-2xl" />
                      <p>Fatality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <Projects/>

      <Footer />
    </>
  );
};

export default Home;