import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full ">
 <div className="container ">
          <div className="w-[85%] text-[#535353bd] !mx-auto !mt-15 !mb-8">
            <hr />
          </div>

          <div className="box flex justify-start md:gap-38 md:!px-31">
            <div className="item1">
             <h3 className="text-[13px] md:text-[14px]">Resource</h3>
             <div className="text-[13px] font-[400] text-[#cfcfcfe5] !pt-5 !py-2  ">
                <ul className="!space-y-2">
                  <li><a href="">Getting Started</a></li>
                  <li><a href="">Documentation</a></li>
                  <li><a href="">Tutorials</a></li>
                  <li><a href="">API Reference</a></li>
                  <li><a href="">Community Forums</a></li> 
                </ul>
             </div>
            </div>
            <div className="item2">
             <h3 className="text-[14px]">Platform</h3>
             <div className="text-[13px] font-[400] text-[#cfcfcfe5] !pt-5 !py-2  ">
                <ul className="!space-y-2">
                  <li><a href="">Features</a></li>
                  <li><a href="">Supported Devices</a></li>
                  <li><a href="">System Requirements</a></li>
                  <li><a href="">Downloads</a></li>
                  <li><a href="">Release Notes</a></li> 
                </ul>
             </div>
            </div>
            <div className="item">
            <h3 className="text-[14px]">Community</h3>
             <div className="text-[13px] font-[400] text-[#cfcfcfe5] !pt-5 !py-2  ">
                <ul className="!space-y-2">
                  <li><a href="">Events</a></li>
                  <li><a href="">Meetups</a></li>
                  <li><a href="">Conferences</a></li>
                  <li><a href="">Hackathons</a></li>
                  <li><a href="">Jobs</a></li> 
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
