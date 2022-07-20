import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]" name="home">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 ml-[4px]">Hi, My Name Is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Dadu Vashakidze
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm jr front-end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a front-end React developer specializing in building and business
          Logic. Currently, I'm focused on improving myself and learning new
          skills such as back-end.
        </p>
        <div>
          <button
            onClick={() =>
              (window.location =
                "https://www.upwork.com/freelancers/~01d01cc28f7312a715")
            }
            className="text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-[#14A800] hover:border-green-600 duration-300"
          >
            UpWork
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
