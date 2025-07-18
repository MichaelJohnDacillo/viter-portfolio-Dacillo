import React from "react";
import { Link } from "react-router-dom";

const CardsProject = ({ image, alt, title, description, href }) => {
  return (
    <>
      <div className="group w-80 h-96 shadowd-2xl border-2 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="h-44 w-full group-hover:scale-105 transition-all duration-500"
        />
        <div className="mx-4 pt-4">
          <h5 className="font-semibold text-lg">{title}</h5>
          <p className="text-md my-4 ">{description}</p>
          {/* <a href={href} className="text-gray-500 hover:text-[#F1CCC2] ">
            Read more...
          </a> */}

          <Link to={href} className="text-gray-500 hover:text-[#ffbeac] ">
            Read more...
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardsProject;
