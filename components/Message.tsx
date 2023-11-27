import Image from "next/image";
import React from "react";
import girl1 from "../public/gi1.jpg";
import girl2 from "../public/gi2.jpg";
import girl3 from "../public/gi3.jpg";
import close from "../public/icons8-close.svg";

const Message = () => {
  return (
    <div className="bg-[#302D40] min-h-screen flex justify-center items-center">
      <div className="flex flex-col max-w-screen-xl mx-auto w-96 h-auto">
        <div className="flex bg-[#FF7271] p-6 rounded-tl-md rounded-tr-md text-white relative ">
          <div className="">
            <div className="rounded-full p-px bg-gray-200 absolute z-10 left-4">
              <Image
                src={girl1}
                alt="girl1"
                className="w-8 h-8 rounded-full "
              />
            </div>
            <div className="rounded-full p-px bg-gray-200 absolute z-0 left-10">
              <Image src={girl2} alt="girl1" className="w-8 h-8 rounded-full" />
            </div>
            <div className="rounded-full p-px bg-gray-200 absolute left-16">
              <Image src={girl3} alt="girl1" className="w-8 h-8 rounded-full" />
            </div>
          </div>

          <div className="ml-24 flex flex-col">
            <h1 className="text-sm font-semibold text-gray-200">
              Elnora, Leila, Lucinda
            </h1>
            <h2 className="text-[10px] text-gray-200">
              We typically reply in a few minutes{" "}
            </h2>
          </div>
        </div>
        <div className="flex bg-[#282739] p-10 gap-4 h-80">
          <div className="rounded-full p-px bg-gray-200 shrink-0 h-fit">
            <Image src={girl2} alt="girl2" className="rounded-full w-8 h-8" />
          </div>

          <div className="text-gray-400 text-xs leading-5 p-4 bg-[#3A384D] rounded-md h-fit w-full relative">
            <div className="inline-block overflow-hidden absolute -ml-2 left-0 top-4">
              <div className="h-3 w-3 origin-bottom-right rotate-45 transform  bg-[#3A384D]"></div>
            </div>
            Hi there!
            <br />
            Looking to get started? i can help
            <br /> answer to your questions!
          </div>
        </div>
        <div className="p-8 bg-[#3A384D] rounded-bl-md rounded-br-md">
          <p className="text-gray-300 text-[10px] tracking-widest leading-5">
            By using the chat, I confirm that I have read the{" "}
            <span className="underline text-[#FF6A6B] cursor-pointer">
              privacy
              <br />
              policy
            </span>{" "}
            and do not object to the use of my personal data.
          </p>
          <button className="text-[#FF6A6B] border border-[#FF6A6B] px-8 py-2 rounded-full mt-4">
            I agree
          </button>
        </div>
        <div className="flex justify-end">
          <div className="rounded-full bg-[#FF6A6B]  w-fit p-4 mt-6">
            <Image src={close} alt="close" className="w-7 h-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
