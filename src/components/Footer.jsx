import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full ">
        <div className="container !mx-auto !px-4 !py-2">
          <div className="w-[95%] md:w-[85%] text-[#535353bd] !mx-auto !mt-10 !mb-8">
            <hr />
          </div>

          <div className="box flex flex-wrap gap-10 md:gap-12 justify-center">
            <div className="item1 w-[40%]  md:w-[25%]">
              <h3 className="text-[13px] md:text-[14px]">Resource</h3>
              <div className="text-[13px] font-[400] text-[#cfcfcfe5] !pt-5">
                <ul className="!space-y-2 ">
                  <li className="link"><a href="#">Getting Started</a></li>
                  <li className="link"><a href="#">Documentation</a></li>
                  <li className="link"><a href="#">Tutorials</a></li>
                  <li className="link"><a href="#">API Reference</a></li>
                  <li className="link"><a href="#">Community Forums</a></li> 
                </ul>
              </div>
            </div>

            <div className="item2 w-[40%]  md:w-[25%]">
              <h3 className="text-[13px] md:text-[14px]">Platform</h3>
              <div className="text-[13px] font-[400] text-[#cfcfcfe5] !pt-5">
                <ul className="!space-y-2">
                  <li className="link"><a href="#">Features</a></li>
                  <li className="link"><a href="#">Supported Devices</a></li>
                  <li className="link"><a href="#">System Requirements</a></li>
                  <li className="link"><a href="#">Downloads</a></li>
                  <li className="link"><a href="#">Release Notes</a></li> 
                </ul>
              </div>
            </div>

            <div className="item3 w-[80%]  md:w-[25%]">
              <h3 className="text-[13px] md:text-[14px]">Community</h3>
              <div className="text-[13px] font-[400] text-[#cfcfcfe5] !pt-5">
                <ul className="!space-y-2">
                  <li className="link"><a href="#">Events</a></li>
                  <li className="link"><a href="#">Meetups</a></li>
                  <li className="link"><a href="#">Conferences</a></li>
                  <li className="link"><a href="#">Hackathons</a></li>
                  <li className="link"><a href="#">Jobs</a></li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
