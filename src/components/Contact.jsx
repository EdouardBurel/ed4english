import React from "react";
import Footer from "./Footer";
import illustration from "../assets/funpro.jpeg"; // Add your image path here

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-[#fef6ec] pt-24">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left: Illustration + Text */}
        <div className="md:w-1/2 bg-[#fef6ec] flex flex-col items-center justify-center p-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D1D1D] mb-4">
            LET’S START WORKING
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            How about starting a chat?
          </p>
          <img
            src={illustration}
            alt="Contact Illustration"
            className="w-72 md:w-96 rounded-lg"
          />
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 bg-gradient-to-b from-[#912030] to-[#dbd9d9] p-10">
          <form className=" text-white space-y-4 max-w-xl mx-auto">
            <div>
              <label className="text-sm font-bold text-[#1D1D1D]">NAME</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1D3B34] placeholder:text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1D1D1D]">
                COMPANY
              </label>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full mt-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1D3B34] placeholder:text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1D1D1D]">PHONE</label>
              <input
                type="text"
                placeholder="Your phone number"
                className="w-full mt-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1D3B34] placeholder:text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1D1D1D]">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full mt-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1D3B34] placeholder:text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1D1D1D]">
                REASON FOR CONTACT
              </label>
              <input
                type="text"
                placeholder="How we can help you"
                className="w-full mt-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1D3B34] placeholder:text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-[#1D1D1D]">
                ANYTHING ELSE WE NEED TO KNOW:
              </label>
              <textarea
                rows="4"
                placeholder=""
                className="w-full mt-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D3B34]"
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-[#5e41ff] text-white px-8 py-3 rounded-full hover:bg-[#4a32cc] transition"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
