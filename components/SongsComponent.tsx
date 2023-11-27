import React from "react";
import img1 from "../public/girl2.jpg";
import Image from "next/image";

const SongsComponent = () => {
  return (
    <div>
      <div className="flex p-10 bg-white">
        <div className="flex justify-center w-7 h-7 rounded-full border border-gray-400 bg-gray-100">
          <div className=" font-bold">1</div>
        </div>
        <Image src={img1} alt="img1" className="w-20 h-14 object-cover" />
        <div className="ml-4 flex flex-col justify-center">
          <h2 className="text-xl font-bold">In My Feelings</h2>
          <h4 className="text-sm">Drake</h4>
        </div>
        <div className="ml-80 mt-3">2,089,766</div>
      </div>
    </div>
  );
};

export default SongsComponent;
