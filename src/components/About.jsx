import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-x-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Dadu, nice to meet you. Take a look Around.</p>
          </div>
          <div>
            <p>
              I am 16 years old front-end jr web developer.My most powerful
              skill is writing react js code, I have worked as freelancer, as
              react js developer and also in start-ups. Now wait for job
              opportunities to improve myself. I may not be the expert in
              front-end, but I am very motivated and organised person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
