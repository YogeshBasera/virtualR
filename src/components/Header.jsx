import React, { useState } from "react";
import logo from "../assets/vr.png";
import Hero from "./Hero";
import Features from "./Features";
import WorkflowSection from "./WorkflowSection";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { RiMenu3Line } from "react-icons/ri";
import SliderLeft from "./SliderLeft";

const Header = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openSliderLeft = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <div className="Header  shadow-md !py-4 md:!py-2  sticky top-0 z-50 backdrop-blur-md  md:bg-white/10 border-b border-[#2c2c2c] md:border-white/10">
        <div className="container  !mx-auto flex item-center justify-between ">
          <div className="col1 flex items-center gap-1 ">
            <img src={logo} alt="/" className=" h-6 w-6  md:h-10 md:w-10 " />
            <h2 className=" text-[18px] text-[#053fdfef] ">
              <span className="bgColor !text-[18px] !font-[500]">virtual</span>R
            </h2>
          </div>
          <div className="col2 flex ">
            <ul className=" hidden md:flex items-center gap-8 w-full">
              <li className="cursor-pointer link transition"><a href="#Features">Features</a></li>
              <li className="cursor-pointer link transition"><a href="#Workflow">Workflow</a></li>
              <li className="cursor-pointer link transition"><a href="#Pricing">Pricing</a></li>
              <li className="cursor-pointer link transition"><a href="#Test">Testimonials</a></li>
            </ul>
          </div>
          <div className="col3 hidden md:flex items-center gap-3">
            {/* <Button variant="contained" className="!capitalize !px-1 !py-1 !text-[12px]">Sign In</Button>
              <Button variant="contained" className="!text-[12px] !capitalize !py-1 ">Create an account</Button>   */}

            <button
              type="button"
              className="link cursor-pointer border rounded-sm !px-1 !py-1 text-[13px] font-medium "
            >
              Sign In
            </button>
            <button
              type="button"
              class="text-white  text-[13px] btnColor border font-medium rounded-sm !px-3 !py-[5.5px] text-center inline-flex items-center cursor-pointer "
            >
              Create an account
            </button>
          </div>

          <div className="col4 flex md:hidden">
            <button onClick={openSliderLeft}>
              <RiMenu3Line className="cursor-pointer text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <SliderLeft
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
      <Hero />
      <Features />
      <WorkflowSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Header;
