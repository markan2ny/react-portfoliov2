import React from "react";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <div id="home" className="h-[100vh]">
      <div className="md:container md:mx-auto h-full flex justify-center items-center flex-col text-center">
        <p className="text-slate-400">Hi, I'am</p>
        <h1 className="text-5xl text-slate-700 font-patua uppercase">
          Mark Anthony Pascual
        </h1>
        <h1 className="text-3xl text-slate-600 font-[700]">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Fullstack Web Developer", "Web Designer"],
            }}
          />
        </h1>
      </div>
    </div>
  );
};
