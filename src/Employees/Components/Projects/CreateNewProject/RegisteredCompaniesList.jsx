import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { CompaniesDetails } from "./Utilities";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const RegisteredCompaniesList = ({ HandleTrackPage }) => {
  return (
    <section className="w-full min-h-screen bg-primary">
      <div className="back-cancel-btn w-full flex justify-between items-center p-6">
        <button className="back-btn text-white">
          <IoIosArrowRoundBack
            className="w-7 h-7"
            onClick={() => HandleTrackPage("Decrement")}
          />
        </button>
        <button className="cancel-btn text-white">
          <RxCross2 className="w-6 h-6" />
        </button>
      </div>
      <div className="companies-list grid md:grid-cols-2 xl:grid-cols-3 gap-4 p-10">
        {CompaniesDetails.map(
          (
            {
              name,
              rating,
              image,
              location,
              description,
              services,
              orders,
              startingPrice,
              portfolioLink,
            },
            index
          ) => {
            return (
              <div
                key={index}
                className="bg-white py-8 p-4 flex flex-col gap-2 rounded-2xl shadow-custom-white"
              >
                <div className="company-header sm:pl-6 sm:pt-6 flex items-center gap-4 sm:gap-8">
                  <div className="company-logo">
                    <img
                      src={image}
                      alt=""
                      className="rounded-full w-16 h-16"
                    />
                  </div>
                  <div className="company-name flex flex-col gap-1">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <h1 className="flex items-center gap-2 bg-primary w-fit px-2 py-1 text-white rounded-lg">
                      <span className="font-medium">Top Rated</span>
                      <span className="flex items-center justify-center gap-1">
                        {Array(rating)
                          .fill(FaStar)
                          .map((Star, index) => (
                            <Star key={index} />
                          ))}
                      </span>
                    </h1>
                    <p className="flex gap-1 items-center">
                      <span>
                        <IoLocationOutline className="w-5 h-5 text-[#B2B4BA]" />
                      </span>
                      <span className=" font-medium">{location}</span>
                    </p>
                  </div>
                </div>
                <div className="company-description">
                  <p className="font-medium">{description}</p>
                </div>
                <div className="company-services">
                  <h1 className="font-bold text-2xl pb-2">Services</h1>
                  <div className="services-list flex items-center gap-2 flex-wrap">
                    {services.map((service, index) => {
                      return (
                        <div className=" rounded-3xl p-2 border-[#A2A2A2] border flex items-center gap-1">
                          <div className="service-icon text-[#141B34B2]">
                            {service.icon}
                          </div>
                          <div className="service-name">{service.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-auto flex flex-col gap-4 pt-2">
                  <div className="achievements flex items-center justify-center">
                    <div className="oders sm:pr-6 sm:border-r-2 sm:border-r-[#00000080]">
                      <p className="font-medium text-[#000000B2]">Orders</p>
                      <h1>{orders}</h1>
                    </div>

                    <div className="services sm:pl-6">
                      <p className="font-medium text-[#000000B2]">
                        Services from
                      </p>
                      <h1>{startingPrice}</h1>
                    </div>
                  </div>
                  <div className="view-portfolio-btn w-full">
                    <button className="bg-primary text-white rounded-lg w-full p-2 ">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default RegisteredCompaniesList;
