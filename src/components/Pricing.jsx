import React from "react";

import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <>
      <div className="flex w-full !mt-8">
        <div className="container">
          <div className="flex-row items-center justify-center w-full">
            <div className="flex justify-center !mt-2">
              <h1 className="text-2xl md:text-[3rem]">Pricing</h1>
            </div>
            <div className="cards w-full !mt-5 flex flex-wrap justify-center items-center gap-4">
              <div className="card1  md:w-[310px] md:h-[400px] border border-[#4949498c] rounded-lg ">
                <div className="w-full flex-row !px-6 !py-5 ">
                  <h3 className="text-[28px]">Free</h3>
                  <p className="text-[13px] !mt-5 text-[#adadad]">
                    <span className="text-4xl text-white">$0</span> /Month
                  </p>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Private board sharing</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">5 Gb Storage</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Web Analytics</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Private Mode</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="border border-[#9c2e0370] btnColor linkBg transition !px-20 !py-[7px] rounded-sm !mt-14 text-[16px] text-[#b9b9b9] cursor-pointer">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              <div className="card2 md:w-[310px] md:h-[400px] border border-[#4949498c] rounded-lg ">
                <div className="w-full flex-row !px-6 !py-5 ">
                  <h3 className="text-[28px]">Pro <span className="text-[14px] bgColor">(Most Popular)</span></h3>
                  <p className="text-[13px] !mt-5 text-[#adadad]">
                    <span className="text-4xl text-white">$10</span> /Month
                  </p>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Private board sharing</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">10 Gb Storage</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Web Analytics (Advance)</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Private Mode</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="border border-[#9c2e0370] btnColor linkBg transition !px-20 !py-[7px] rounded-sm !mt-14 text-[16px] text-[#b9b9b9] cursor-pointer">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              <div className="card3 md:w-[310px] md:h-[400px] border border-[#4949498c] rounded-lg ">
                <div className="w-full flex-row !px-6 !py-5 ">
                  <h3 className="text-[28px]">EnterPrice</h3>
                  <p className="text-[13px] !mt-5 text-[#adadad]">
                    <span className="text-4xl text-white">$200</span> /Month
                  </p>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Private board sharing</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Unlimited Storage</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">High Performance Network</p>
                  </div>
                  <div className=" flex items-center gap-2 !mt-5 ">
                    <TiTick className="border rounded-[50%] text-[18px] " />
                    <p className="text-[12px] ">Private Mode</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="border border-[#9c2e0370] btnColor linkBg transition !px-20 !py-[7px] rounded-sm !mt-14 text-[16px] text-[#b9b9b9] cursor-pointer">
                      Subscribe
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
