import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/home/about/About";
import Projects from "./components/pages/home/projects/Projects";
import PageNotFound from "./components/partials/PageNotFound";
function App() {
  return (
    <>
    <Home/>

        {/* <!-- Header --> */}
  <header class="px-6 md:px-20 py-6 flex items-center justify-between">
    <div class="text-lg font-bold text-green-400">Portfolio</div>
    <nav class="hidden md:flex gap-8 items-center">
      <a href="#" class="text-black hover:text-green-400">Home</a>
      <a href="#" class="text-black hover:text-green-400">Projects</a>
      <a href="#" class="text-black hover:text-green-400">Resume</a>
    </nav>
    <div class="relative">
      <input type="text" placeholder="Search..." class="pl-4 pr-10 py-2 rounded-full text-sm bg-[#1f2937] text-white placeholder-gray-400 focus:outline-none"/>
      <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l-4-4m0 0l4-4m-4 4h16" />
        </svg>
      </button>
    </div>
  </header>
        {/* <!-- Hero Section --> */}
        <section class="px-6 md:px-20 py-12">
          <div class="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* <!-- Text Section --> */}
            <div class="max-w-xl">
              <p class="text-lg">Hello, <span class="text-green-400 font-medium">I'm</span></p>
              <h1 class="text-4xl md:text-5xl font-bold text-green-400 mt-2">Tayyab Sajjad</h1>
              <p class="text-lg font-medium mt-1">UI/UX Designer And Graphic Designer</p>
              <p class="text-sm text-gray-400 mt-4">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
              </p>
              <button class="mt-6 bg-green-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition">Let's Talk</button>

              {/* <!-- Social Icons --> */}
              <div class="flex items-center gap-4 mt-8">
                <p class="text-sm text-gray-400">Check Out My</p>
                <div class="flex gap-3">
                  <div class="bg-[#1f2937] p-3 rounded-full hover:bg-green-400 cursor-pointer">
                    <img src="./images/1x1.png"/>
                  </div>
                  <div class="bg-[#1f2937] p-3 rounded-full hover:bg-green-400 cursor-pointer">
                    <img src="./images/1x1.png"/>
                  </div>
                  <div class="bg-[#1f2937] p-3 rounded-full hover:bg-green-400 cursor-pointer">
                    <img src="./images/1x1.png"/>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Image Section --> */}
            <div class="relative w-64 h-64">
              <div class="absolute inset-0 bg-green-400  rotate-45 hexagon"></div>
              {/* <img src="./images/1x1.png" alt="" className="relative"/> */}
              {/* <img src="./images/1x1.png" alt="Profile" class="relative z-10 object-cover w-full h-full rounded-[20%] rotate-45" style="transform: rotate(-45deg);"/> */}
            </div>
          </div>
        </section>

        {/* <!-- What I Do Section --> */}
        <section class="bg-[#0e1a2b] px-6 md:px-20 py-16">
          <p class="text-green-400 mb-2">My services</p>
          <h2 class="text-3xl md:text-4xl font-bold mb-10">What I Do</h2>
          <div class="grid gap-6 md:grid-cols-3">
            {/* <!-- Card 1 --> */}
            <div class="bg-[#1f2937] p-6 rounded-lg hover:shadow-lg transition">
              <div class="mb-4">
                <div class="text-green-400 text-2xl font-bold">UX/UI</div>
              </div>
              <h3 class="text-xl font-semibold mb-2">UI/UX Designer</h3>
              <p class="text-gray-400 text-sm">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="bg-[#1f2937] p-6 rounded-lg hover:shadow-lg transition">
              <div class="mb-4">
                <div class="text-green-400 text-2xl font-bold">Icon</div>
              </div>
              <h3 class="text-xl font-semibold mb-2">Graphic Designer</h3>
              <p class="text-gray-400 text-sm">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="bg-[#1f2937] p-6 rounded-lg hover:shadow-lg transition">
              <div class="mb-4">
                <div class="text-green-400 text-2xl font-bold">Web</div>
              </div>
              <h3 class="text-xl font-semibold mb-2">Web Designer</h3>
              <p class="text-gray-400 text-sm">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying
              </p>
            </div>
          </div>
        </section>

        <div className="py-20 px-4">
          <div class="relative w-64 h-64 hexagon-soft bg-gradient-to-br from-pink-300 to-purple-400 shadow-2xl rounded-full shadow-pink-400">
        <img src="./images/1x1.png" alt="Profile" class="absolute inset-0 size-10 object-cover hexagon-soft top-10 left-11 " />
      </div>
        </div>
        
    </>
  );
};

export default App;
