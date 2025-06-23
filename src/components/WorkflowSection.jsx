import React from "react";
import img from "../assets/code.jpg";
import img2 from "../assets/right.png";

const WorkflowSection = () => {
  return (
    <>
      <div className="workflowSection w-full">
        <div className="container">
          <div className="item1 flex justify-center !mt-2">
            <h1 className="text-[3rem]">
              Accelerate your <span className="bgColor">coding workflow.</span>
            </h1>
          </div>
          <div className="itme2 w-full flex justify-center  gap-7 ">
            <img src={img} alt="/" className="w-[40%]" />
            <div className="tick-box !mt-6">
              <div className="one flex gap-2 items-center !mt-4  ">
                <img src={img2} alt="logo" className="h-4 w-4" />
                <h3>Code merge mode easy</h3>
              </div>
              <p className="text-[13px] text-[#949494e8] !ml-[29px] !mt-1">
                Track the performance of your VR apps and going insights into{" "}
                <br />
                user behavior.
              </p>
              <div className="two flex gap-2 items-center !mt-10  ">
                <img src={img2} alt="logo" className="h-4 w-4" />
                <h3>Review code without worry</h3>
              </div>
              <p className="text-[13px] text-[#949494e8] !ml-[29px] !mt-1">
                Track the performance of your VR apps and going insights into{" "}
                <br />
                user behavior.
              </p>
              <div className="three flex gap-2 items-center !mt-10 ">
                <img src={img2} alt="logo" className="h-4 w-4" />
                <h3>AI Assistance to reduce time</h3>
              </div>
              <p className="text-[13px] text-[#949494e8] !ml-[29px] !mt-1">
                Track the performance of your VR apps and going insights into{" "}
                <br />
                user behavior.
              </p>
              <div className="four flex gap-2 items-center !mt-10    ">
                <img src={img2} alt="logo" className="h-4 w-4" />
                <h3>Share work in minutes</h3>
              </div>
              <p className="text-[13px] text-[#949494e8] !ml-[29px] !mt-1">
                Track the performance of your VR apps and going insights into{" "}
                <br />
                user behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkflowSection;
