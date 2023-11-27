import Link from "next/link";
import React from "react";
import Image from "next/image";
import movie from "../public/movie.jpg";

const Film = () => {
  return (
    <div className="min-h-screen bg-[#F6F8FC] flex justify-center items-center p-20">
      <div className="max-w-5xl bg-[#FFF] p-20 shadow-2xl">
        <div className="relative mb-4">
          <h1 className="text-2xl font-bold">Star Wars: The Last Jedi</h1>
          <Link href="#" className=" text-[#4A80E9]">
            Action & Adventure
          </Link>
          <div className="absolute text-[#4A80E9] font-bold right-0 top-0 bottom-0 flex items-center">
            7.4<span className="text-gray-400 font-normal"> / 10</span>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3">
            <Image src={movie} alt="movie" className="object-cover h-full" />
          </div>

          <div className="ml-10 w-2/3 max-w-4xl">
            <h2 className="text-xl font-bold mb-2">About the Movie</h2>
            <p className="text-lg">
              In Lucasfilm s Star Wars: The Last jedi, the Skywalker saga
              continues as the heros of The Force Awakens join the galactic
              legands in an epic adventure that unlocks new mysteries of the
              Force and shocking revelations of the past.
            </p>

            <div className="flex mt-10 gap-14">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold pb-2">Actors</h2>
                <Link className="text-md text-[#4A80E9]" href="#">
                  Oscar Isaac
                </Link>
                <Link className="text-md  text-[#4A80E9]" href="#">
                  Mark Hamil
                </Link>
                <Link className="text-md  text-[#4A80E9]" href="#">
                  Daisy Ridley
                </Link>
                <Link className="text-md  text-[#4A80E9]" href="#">
                  John Boyega
                </Link>
                <Link className="text-md  text-[#4A80E9]" href="#">
                  Kelly Marie Tran
                </Link>
              </div>
              <div className="">
                <h2 className="text-xl font-bold pb-2">Director</h2>
                <Link className="text-md  text-[#4A80E9]" href="#">
                  Rian Johnson
                </Link>
                <div className="mt-6">
                  <h2 className="text-xl font-bold pb-2">Screenwriter</h2>
                  <Link className="text-md text-[#4A80E9]" href="#">
                    Rian Johnson
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold pb-2">Producers</h2>
                <Link className="text-md text-[#4A80E9]" href="#">
                  Kathleen Kennedy
                </Link>
                <Link className="text-md text-[#4A80E9]" href="#">
                  Ram Bergman
                </Link>
              </div>
            </div>
            <div className="">
              <button className="text-lg text-[#4A80E9] underline font-bold pt-4">
                More
              </button>
            </div>
          </div>
        </div>
        <div></div>

        <div className="flex mt-6">
          <div className="w-1/3 relative">
            <span className="text-xl font-bold">$19.00</span>
            <button className="text-sm rounded-full border-[2px] absolute border-black px-6 py-1 font-bold right-0">
              BUY
            </button>
          </div>

          <div className="w-2/3 shrink relative ">
            <button className="absolute right-0 text-sm rounded-full bg-black px-6 py-1 text-white">
              WATCH TRAILER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
