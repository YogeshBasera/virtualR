import React from "react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="container">
          <div className="heading flex justify-center items-center !py-4">
            <h1 className="text-[3rem]">What People are saying</h1>
          </div>
          <div className="box flex flex-wrap gap-4 justify-center   ">
            <div className="card1  h-[180px] w-[310px] border border-[#5c5c5c31] bg-[#1d1d1dc4] rounded-sm">
              <div className=" w-full flex-row !px-5 !py-5">
                <p className="text-[13px] text-[#f1f1f19d] ">
                  I am extremely satisfied with the services provided. The team
                  was responsive, professional, and delivered results beyond my
                  expectations.
                </p>
                <div className="flex w-full  ">
                  <img
                    src={user1}
                    alt="/"
                    className="h-9 w-9 rounded-2xl !mt-4"
                  />
                  <div className="!mt-4 !ml-3">
                    <h5 className="text-[13px] font-[200] text-[#dadadad7]">
                      John Doe
                    </h5>
                    <p className="text-[12px] text-[#808080b0]">
                      Stellar Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card2 h-[180px] w-[310px] border border-[#5c5c5c31] bg-[#1d1d1dc4] rounded-sm">
              <div className=" w-full flex-row !px-5 !py-5">
                <p className="text-[13px] text-[#f1f1f19d] ">
                  I couldn't be happier with the outcome of our project. The
                  Team's creativity and problem-solving skills were instrumental
                  in bringing our vision to life.
                </p>
                <div className="flex w-full  ">
                  <img
                    src={user2}
                    alt="/"
                    className="h-9 w-9 rounded-2xl !mt-4"
                  />
                  <div className="!mt-4 !ml-3">
                    <h5 className="text-[13px] font-[200] text-[#dadadad7]">
                      Jane Smith
                    </h5>
                    <p className="text-[12px] text-[#808080b0]">
                      Blue Horizon Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card3 h-[205px] w-[310px] border border-[#5c5c5c31] bg-[#1d1d1dc4] rounded-sm">
              <div className=" w-full flex-row !px-5 !py-5">
                <p className="text-[13px] text-[#f1f1f19d] ">
                  Working with this company was a pleasure. Their attention to
                  detail and commitment to excellence are commendable. I would
                  highly recommend them to anyone looking for top-notch service.
                </p>
                <div className="flex w-full  ">
                  <img
                    src={user3}
                    alt="/"
                    className="h-9 w-9 rounded-2xl !mt-4"
                  />
                  <div className="!mt-4 !ml-3">
                    <h5 className="text-[13px] font-[200] text-[#dadadad7]">
                      David Johnson
                    </h5>
                    <p className="text-[12px] text-[#808080b0]">
                      Quantum Innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card4 h-[225px] w-[310px] border border-[#5c5c5c31] bg-[#1d1d1dc4] rounded-sm">
              <div className=" w-full flex-row !px-5 !py-5">
                <p className="text-[13px] text-[#f1f1f19d] ">
                 Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innvative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!
                </p>
                <div className="flex w-full  ">
                  <img
                    src={user4}
                    alt="/"
                    className="h-9 w-9 rounded-2xl !mt-4"
                  />
                  <div className="!mt-4 !ml-3">
                    <h5 className="text-[13px] font-[200] text-[#dadadad7]">
                      Ronee Brown
                    </h5>
                    <p className="text-[12px] text-[#808080b0]">
                      Fusion Dynamics
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card5 h-[190px] w-[310px] border border-[#5c5c5c31] bg-[#1d1d1dc4] rounded-sm">
              <div className=" w-full flex-row !px-5 !py-5">
                <p className="text-[13px] text-[#f1f1f19d] ">
                  I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.
                </p>
                <div className="flex w-full  ">
                  <img
                    src={user5}
                    alt="/"
                    className="h-9 w-9 rounded-2xl !mt-4"
                  />
                  <div className="!mt-4 !ml-3">
                    <h5 className="text-[13px] font-[200] text-[#dadadad7]">
                      Michael Wilson
                    </h5>
                    <p className="text-[12px] text-[#808080b0]">
                      Visionary Creations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card6 h-[190px] w-[310px] border border-[#5c5c5c31] bg-[#1d1d1dc4] rounded-sm">
              <div className=" w-full flex-row !px-5 !py-5">
                <p className="text-[13px] text-[#f1f1f19d] ">
                 The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.
                </p>
                <div className="flex w-full  ">
                  <img
                    src={user6}
                    alt="/"
                    className="h-9 w-9 rounded-2xl !mt-4"
                  />
                  <div className="!mt-4 !ml-3">
                    <h5 className="text-[13px] font-[200] text-[#dadadad7]">
                      Emily Davis
                    </h5>
                    <p className="text-[12px] text-[#808080b0]">
                      Synergy Systems
                    </p>
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

export default Testimonials;
