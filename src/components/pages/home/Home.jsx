import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import { FaArrowCircleRight } from "react-icons/fa";
import Projects from "./projects/Projects";
import Footer from "../../partials/Footer";
import About from "./about/About";

const Home = () => {
  return (
    <>
      <Header />

      <Banner />

      <About/>

      <Projects />

      <Footer />
    </>
  );
};

export default Home;
