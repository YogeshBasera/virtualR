import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <>
      <div className="flex max-w-full items-center !py-[100px]">
        <div className="container">
          <div className="item1 w-full text-6xl flex items-center justify-center text-center">
            <h1>
              VirtualR build tools{" "}
              <span className="bgColor ">
                for <br />
                developers
              </span>
            </h1>
          </div>

          <div className="item2 w-full  flex items-center justify-center text-center !py-5">
            <p className="text-[14px] text-[#a7a7a7af]">
              Empower your creativity and bring your VR app ideas to life with
              our intuitive development tools. <br />
              Get started today and turn your imagination into immersive
              reality!
            </p>
          </div>
          <div className="item3 w-full flex items-center justify-center gap-3 !py-5">
            <button
              type="button"
              class="text-white btnColor  border font-medium rounded-sm text-sm !px-5 !py-1.5 text-center inline-flex items-center cursor-pointer "
            >
              Start for free
            </button>

            <button
              type="button"
              class="text-white border font-medium rounded-sm text-sm !px-5 !py-1.5 text-center inline-flex items-center cursor-pointer "
            >
              Documentation
            </button>
          </div>
          <div className="flex items-center justify-center !mt-16 gap-2 ">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg flex border w-[40%] border-orange-700 shadow-orange-400"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              autoPlay
              loop
              muted
              className="rounded-lg border  w-[40%] border-orange-700 shadow-orange-400  "
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
