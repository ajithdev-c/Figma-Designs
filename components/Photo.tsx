import React from "react";
import Image from "next/image";
import photo from "../public/photo.jpg";
import Link from "next/link";
import gallery from "../public/p1.avif";
import heart from "../public/heart.png";
import user from "../public/user.png";
import share from "../public/share.png";
import pencil from "../public/pencil.png";
import alarm from "../public/alarm.png";
import dots from "../public/dots.png";
import GridImage from "@/components/GridImage";

const Photo = () => {
  return (
    <div className="min-h-screen bg-[#1C2333] flex justify-center p-20">
      <div className="bg-white max-w-5xl relative">
        <div className="w-16 h-72 bg-gray-400 absolute left-full top-0 right-0">
          <Image src={dots} alt="dots" className="w-10 h-10 mb-10 mt-4 ml-2" />
          <Image src={alarm} alt="alarm" className="w-6 h-6 mb-10 ml-4" />
          <Image src={pencil} alt="pencil" className="w-6 h-6 mb-10 ml-4" />
          <Image src={share} alt="share" className="w-6 h-6 mb-10 ml-4" />
        </div>
        <div className="flex px-12">
          <div className="w-1/4 relative">
            <Image
              src={photo}
              alt="photo"
              className="h-full object-cover absolute -top-6"
            />
          </div>
          <div className="flex flex-col w-3/4 px-10">
            <div className="flex border-b-2 py-4">
              <div className="w-full border-r-2">
                <h1 className="text-xl font-bold">Joan Doe</h1>

                <h3 className="text-gray-400 text-xs">Photography</h3>
                <Link href="#" className="text-gray-400 text-xs">
                  Timisora, RO
                </Link>
              </div>

              <div className="flex gap-x-10 justify-end items-end w-full border-r-2 px-4">
                <div>
                  <Image src={gallery} alt="gallery" className="w-6 h-6 ml-2" />
                  <div className="text-2xl font-bold">127</div>
                </div>
                <div>
                  <Image src={heart} alt="png" className="w-6 h-6 ml-2" />
                  <div className="text-2xl font-bold">354</div>
                </div>
                <div>
                  <Image src={user} alt="user" className="w-6 h-6 ml-2" />
                  <div className="text-2xl font-bold">470</div>
                </div>
              </div>

              <div className="px-4 py-4 w-full">
                <div className="flex justify-center items-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 absolute left-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                  <button className="px-14 py-2  bg-[#FBB800] text-white">
                    Follow
                  </button>
                </div>
              </div>
            </div>

            <div className="flex mt-4">
              <div className="max-w-sm">
                <h2 className="mb-4 text-xl font-bold">About me</h2>
                <p className="text-gray-400 text-xs">
                  Dolor sit amet,utamur efficiantur ius cu, ludus eligendi
                  adipisci ex usu, per ne putent regione philosophia, Saperet
                  civibus quaerendum usu ex, ut alii habeo utroque qui.
                </p>
                <p className="text-gray-400 text-xs mt-5">
                  Et inermis quaestio elaboraret pro.Habeo corrumpit assueverit
                  per at. Justo ad has, solet definitiones ad mel.
                </p>
              </div>
              <div className="px-10">
                <h2 className="mb-4 text-xl font-bold">Skills</h2>
                <div className="flex">
                  <h3 className="text-xs text-gray-600 leading-6">Equipment</h3>
                  <div className="relative p-3">
                    <div className="w-14 h-1 bg-black absolute"></div>
                    <div className="rounded-full bg-black absolute w-3 h-3 right-8 bottom-2 "></div>
                    <div className="w-20 h-1 bg-gray-300"></div>
                  </div>
                </div>

                <div className="flex">
                  <h3 className="text-xs text-gray-600 leading-6">Editing</h3>
                  <div className="relative p-3">
                    <div className="w-14 h-1 bg-black absolute"></div>
                    <div className="rounded-full bg-black absolute w-3 h-3 right-8 bottom-2"></div>
                    <div className="w-20 h-1 bg-gray-300 "></div>
                  </div>
                </div>

                <div className="flex">
                  <h3 className="text-xs text-gray-600 leading-6">Marketing</h3>
                  <div className="relative p-3">
                    <div className="w-10 h-1 bg-black absolute"></div>
                    <div className="rounded-full bg-black absolute w-3 h-3 right-10 bottom-2"></div>
                    <div className="w-20 h-1 bg-gray-300 "></div>
                  </div>
                </div>
                <div className="flex">
                  <h3 className="text-xs text-gray-600 leading-6">
                    Retouching
                  </h3>
                  <div className="relative p-3">
                    <div className="w-8 h-1 bg-black absolute"></div>
                    <div className="rounded-full bg-black absolute w-3 h-3 right-12 bottom-2"></div>
                    <div className="w-20 h-1 bg-gray-300 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GridImage />
      </div>
    </div>
  );
};
export default Photo;
