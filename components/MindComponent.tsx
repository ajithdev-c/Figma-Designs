import Image from "next/image";
import React from "react";
import { NextPage } from "next";

interface Props {
  heading2: string;
  para1: string;
  src: any;
}

const MindComponent: NextPage<Props> = (props) => {
  const { heading2, para1, src } = props;
  return (
    <div>
      <div
        className="flex flex-col items-center md:flex-row gap-6 bg-white p-3 md:p-6 rounded-md 
      duration-300 hover:shadow-xl hover:shadow-violet-100 cursor-pointer md:items-start md:h-36"
      >
        <div className="bg-gray-100 rounded-full p-2 shrink-0">
          <Image src={src} alt="img" className="w-12 h-12 rounded-full" />
        </div>
        <div>
          <span className="inline-flex items-center">
            <span className="text-lg font-bold mb-2">{heading2}</span>
          </span>

          <p className="text-sm font-medium text-gray-500">{para1}</p>
        </div>
      </div>
    </div>
  );
};

export default MindComponent;
