import React from "react";
import Image from "next/image";
import de from "../public/de.jpeg";

const Development = () => {
  return (
    <div className="relative bg-gray-300 min-h-screen flex  items-center justify-center">
      <div className="bg-[#FFF] rounded-2xl p-20 max-w-4xl flex flex-col ">
        <div className="mb-4">
          <h1 className="text-base font-semibold text-[#272A3D]">
            Development
          </h1>
          <h2 className="text-xl font-bold text-[#323248] font-serif">
            Compatible Inkjet Cartridge
          </h2>
        </div>
        <div className="flex flex-row">
          <div className="w-3/4">
            <div>
              <Image
                src={de}
                alt="development"
                className="w-full h-56 object-cover rounded-md"
              />
            </div>
            <div className="grid grid-cols-3 w-full py-6 gap-8">
              <div>
                <h2 className="text-base font-bold font-serif">
                  Life Advice Looking Through A Window
                </h2>
                <p className="text-sm py-2">
                  Life is a journey of twists and turns,peaks and valleys,
                  mountains to climb and oceans to explore.
                </p>
              </div>
              <div>
                <h2 className="text-base font-bold font-serif">
                  Choosing The Best Photo Printer
                </h2>
                <p className="text-sm py-2">
                  Life is a journey of twists and turns,peaks and valleys,
                  mountains to climb and oceans to explore.{" "}
                </p>
              </div>
              <div>
                <h2 className="text-base font-bold font-serif">
                  Unmatched Toner Cartridge Quality 20 Less Than Oem Price
                </h2>
                <p className="text-sm py-2">
                  Life is a journey of twists and turns,peaks and valleys,
                  mountains to climb and oceans to explore.
                </p>
              </div>
            </div>
            <div>
              <button className="px-4 py-2 border-[1px] border-[#000] rounded-md font-semibold text-xs">
                Read more
              </button>
            </div>
          </div>
          <div className="bg-[#151D4B] rounded-md max-h-96 w-1/4 shadow-2xl p-8 mx-4">
            <h2 className="text-base font-bold text-white font-serif">
              Party Jokes Starting But Unnecessary
            </h2>
            <p className="text-sm text-white 2xl:mt-6">
              Life is a journey of twists and turns,peaks and valleys, mountains
              to climb and oceans to explore.
            </p>
            <button className="px-4 py-2 border-[1px] border-[#000] rounded-md font-semibold text-sm bg-white mt-12">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
