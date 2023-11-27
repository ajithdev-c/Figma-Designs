import React from "react";

import person from "../public/person.png";
import comments from "../public/comments.png";
import Image from "next/image";
import { NextPage } from "next";

interface Props {
  src: any;
  level: string;
  heading: string;
  button1: string;
  button2: string;
  people: string;
  comment: string;
}

const ProgressComponent: NextPage<Props> = (props) => {
  const { src, level, heading, button1, button2, people, comment } = props;
  return (
    <div className="flex gap-4 p-4 bg-white rounded-md mb-2">
      <div className="bg-white">
        <Image src={src} alt="uber1" className="w-12 h-10 rounded-full" />
      </div>
      <div className="relative w-full">
        <div className="flex">
          <button className="bg-[#f55f92] rounded-md text-white text-[8px] px-2 py-0.5">
            {level}
          </button>
          <div className="absolute right-2 text-[10px] text-gray-400">
            18 Dec,2017
          </div>
        </div>
        <h2 className="text-[#424895] font-semibold text-sm">{heading}</h2>
        <div className="flex gap-2">
          <button className="bg-[#F2F2F2] rounded-md text-[10px] text-gray-400 px-2 py-0.5">
            {button1}
          </button>
          <button className="bg-[#F2F2F2] rounded-md text-[10px] text-gray-400 px-2 py-0.5">
            {button2}
          </button>
        </div>
        <div className="flex pt-4 relative">
          <Image src={person} alt="person" className="w-4 h-4" />
          <div className="text-gray-400 text-[10px]">{people}</div>
          <div className="flex absolute gap-1 right-2">
            <Image src={comments} alt="comments" className="w-4 h-4" />
            <div className="text-gray-400 text-[10px]">{comment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressComponent;
