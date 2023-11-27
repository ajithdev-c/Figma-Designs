import React, { useState } from "react";

interface Props {
  handleSubmit: (name: string, review: string) => void;
  trigger: any;
  setTrigger: any;
}

const PopUp = (props: Props) => {
  const { handleSubmit, trigger, setTrigger } = props;

  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <form className="w-[600px] flex flex-col">
        {trigger && (
          <div className="bg-white p-6 rounded-md">
            <div className="flex relative mb-6">
              <div className="text-xl font-bold">Form</div>
              <div
                className="absolute text-xl font-bold right-2  cursor-pointer"
                onClick={() => {
                  setTrigger(false);
                }}
              >
                X
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-10">
                <label className="font-bold">Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Name"
                  className="px-6 py-1 border w-full"
                />
              </div>
              <div className="flex gap-8">
                <label className="font-bold">Review</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                  placeholder="Review"
                  className="px-6 pt-2 pb-20 border w-full"
                />
              </div>
              <button
                type="button"
                className="px-6 py-2 bg-[#221F32] text-white rounded-md w-fit mx-auto"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(name, review);
                  setTrigger(false);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default PopUp;
