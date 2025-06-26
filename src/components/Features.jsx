import React from "react";
import { RiRobot2Line } from "react-icons/ri";
import { FaFingerprint } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiBatteryChargeLine } from "react-icons/ri";
import { GrConnect } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

const Features = () => {
  return (
    <>
      <div className="w-full flex-col items-center">
        <div className="container">
          <div className="item1 bg-[#131313] flex justify-center w-full !mx-auto">
            <h3 className="heading uppercase text-[14px] !px-2 bgColor">
              Feature
            </h3>
          </div>
          <div className="item2 flex justify-center !mt-10">
            <h1 className=" text-2xl md:text-[3rem]">
              Easily build <span className="bgColor">your code</span>
            </h1>
          </div>
          <div className="item3 w-full flex flex-wrap items-center justify-center !mt-10 md:gap-4 ">
            <div className=" flex-row h-[130px] w-[300px] md:h-[200px] ">
              <div className="firstLine flex gap-4">
                <RiRobot2Line className=" bg-[#1b1b1b] h-[21px] w-[21px] rounded-2xl !px-[3px] " />
                <h3 className="text-[14px] ">Darg-and-Drop Interface</h3>
              </div>
              <p className=" text-[12px] flex items-center justify-center !ml-4 !mt-2 md:!mt-5">
                Easily design and arrange your VR  <br />
                environments with a user-friendly drag- <br />
                and-drop interface.
              </p>
            </div>

            <div className=" flex-row h-[145px] w-[300px] md:h-[200px] gap-3 ">
              <div className="firstLine flex gap-4">
                <FaFingerprint className=" bg-[#1b1b1b] h-[21px] w-[21px] rounded-2xl !px-[3px] " />
                <h3 className="text-[14px] ">Multi-Platform Compatibility</h3>
              </div>
              <p className="text-[12px] flex items-center justify-center !mt-2 md:!mt-5">
                Build VR applications that run <br />
                seamlessly across multiple platforms, <br />
                including mobile, desktop, and VR <br />
                headsets.
              </p>
            </div>

            <div className=" flex-row h-[145px] w-[300px] md:h-[200px] gap-3">
              <div className="firstLine flex gap-4">
                <AiOutlineSafetyCertificate className=" bg-[#1b1b1b] h-[21px] w-[21px] rounded-2xl !px-[3px] " />
                <h3 className="text-[14px] ">Built-in Templates</h3>
              </div>
              <p className="text-[12px] flex items-center !ml-9 !mt-2 md:!mt-5 ">
                Jumpstart your VR projects with a <br />
                variety of built-in templates for <br />
                different types of applications and <br />
                environments.
              </p>
            </div>

            <div className=" flex-row h-[130px] w-[300px] md:h-[200px] gap-3">
              <div className="firstLine flex gap-4">
                <RiBatteryChargeLine className=" bg-[#1b1b1b] h-[21px] w-[21px] rounded-2xl !px-[3px] " />
                <h3 className="text-[14px] ">Real-Time Preview</h3>
              </div>
              <p className="text-[12px] flex items-center !ml-9 !mt-2 md:!mt-5">
                Preview your VR application in real- <br />
                time as you make changes, allowing
                <br />
                for quick iterations and adjustments.
              </p>
            </div>

            <div className=" flex-row h-[145px] w-[300px] md:h-[200px] gap-3">
              <div className="firstLine flex gap-4">
                <GrConnect className=" bg-[#1b1b1b] h-[21px] w-[21px] rounded-2xl !px-[3px] " />
                <h3 className="text-[14px] ">Collaboration Tools</h3>
              </div>
              <p className="text-[12px] flex items-center justify-center !mt-2 md:!mt-5">
                Work together with your team in real- <br />
                time on VR projects, enabling <br />
                seamless collaboration and idea <br />
                sharing.
              </p>
            </div>

            <div className=" flex-row h-[150px] w-[300px] md:h-[200px] gap-3">
              <div className="firstLine flex gap-4">
                <MdDashboard className=" bg-[#1b1b1b] h-[21px] w-[21px] rounded-2xl !px-[3px] " />
                <h3 className="text-[14px] ">Analytics Dashboard</h3>
              </div>
              <p className="text-[12px] flex items-center justify-center !ml-4 !mt-2 md:!mt-5">
                Gain valuable insights into user
                <br />
                interactions and behavior within your VR <br />
                applications with an integrated <br />
                analytics dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
