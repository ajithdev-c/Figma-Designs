import React from "react";

const Help = () => {
  return (
    <div className="bg-[#21213B] min-h-screen flex px-28 py-60">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#2F304F] max-w-screen-xl mx-auto rounded-lg p-20 gap-28">
        <div>
          <h1 className="text-white text-4xl font-bold pb-6">
            Help us do more
          </h1>
          <p className="text-[#E9EAFF] text-lg max-w-md tracking-wider">
            We'll get right to the point: we're asking you to support us. We're
            a non profit that relies on support from people like you. If
            everyone reading this gives $10 monthly, we can thrive for years.
          </p>
        </div>
        <div>
          <div>
            <h3 className="text-[#E9EAFF] text-sm font-bold pb-2">
              Select gift frequency
            </h3>
            <div className="p-2 bg-[#21213B] rounded-full w-fit">
              <button className="text-[#ABACC1] bg-[#2F304F] rounded-full px-8 py-2 text-sm">
                Monthly
              </button>
              <button className="text-[#ABACC1] text-sm px-8 py-2">
                One time
              </button>
            </div>
          </div>
          <div className="py-6">
            <h3 className="text-[#E9EAFF] text-sm font-bold pb-2">
              Select amount(in US dollar)
            </h3>
            <div className="flex gap-2">
              <div className="p-0.5 bg-[#21213B] rounded-full w-fit">
                <button className="text-[#E9EAFF] bg-[#2F304F] rounded-full px-5 py-2 text-sm font-bold hover:bg-white hover:text-black tracking-wider">
                  $10
                </button>
              </div>
              <div className="p-0.5 bg-[#21213B] rounded-full w-fit">
                <button className="text-[#E9EAFF] bg-[#2F304F] rounded-full px-5 py-2 text-sm font-bold hover:bg-white hover:text-black tracking-wider">
                  $20
                </button>
              </div>
              <div className="p-0.5 bg-[#21213B] rounded-full w-fit">
                <button className="text-[#E9EAFF] bg-[#2F304F] rounded-full px-5 py-2 text-sm font-bold hover:bg-white hover:text-black tracking-wider">
                  $30
                </button>
              </div>
              <div className="p-0.5 bg-[#21213B] rounded-full w-fit">
                <button className="text-[#E9EAFF] bg-[#2F304F] rounded-full px-5 py-2 text-sm font-bold hover:bg-white hover:text-black tracking-wider">
                  $40
                </button>
              </div>
              <div className="p-0.5 bg-[#21213B] rounded-full w-fit">
                <button className="text-[#E9EAFF] bg-[#2F304F] rounded-full px-5 py-2 text-sm font-bold hover:bg-white hover:text-black tracking-wider">
                  Other
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 flex">
            <input type="checkbox" className="w-10 h-10 bg-slate-600 mr-3" />

            <label className="text-[#ABACC1]">
              Yes, I'll generously add $0.75 each month to cover the transaction
              fees.
            </label>
          </div>
          <div>
            <h3 className="text-[#E9EAFF] text-sm font-bold pb-2">Name</h3>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-5 bg-[#2F304F] border-2 border-[#21213B] w-full text-white text-base rounded-md"
            />
            <div className="text-[#6672cb] pt-3">
              Click here to give in honour of other person
            </div>
          </div>
          <div></div>
          <button className="bg-[#1865F1] mt-12 px-16 py-4 text-[#E9EAFF] text-lg rounded-md">
            Donate now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
