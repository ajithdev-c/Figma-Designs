import React from "react";

const RoundButton = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-10 max-w-screen-xl mx-auto">
        <div className="w-96 h-44 rounded-full bg-[#D7D7D7] relative">
          <div className="w-36 h-36 rounded-full bg-[#4F4F4F] absolute right-4 top-4">
            <div className="w-20 h-20 rounded-full bg-white absolute right-8 top-8"></div>
          </div>
        </div>
        <div className="w-96 h-44 rounded-full bg-[#D7D7D7] relative">
          <div className="w-36 h-36 rounded-full bg-[#D52F5D] absolute left-4 top-4">
            <div className="w-20 h-20 rounded-full bg-white absolute left-8 top-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundButton;
