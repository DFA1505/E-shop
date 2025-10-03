import React from "react";
import Button from "../Shared/Button";
import C4 from "../../assets/Category/C4.png";
import C5 from "../../assets/Category/C5.png";
import C6 from "../../assets/Category/C6.png";

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-r from-black/60 to-gray-400 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="">
              <div className="mb-1 space-y-3">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-4">
                  Consoles
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={C4}
              alt=""
              className="w-[520px] absolute top-3 -right-7"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-purple-400 to-gray-400 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb- space-y-3">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-4">
                  VR
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-blue-500"}
                  textColor={"text-gray-300"}
                />
              </div>
            </div>
            <img
              src={C5}
              alt=""
              className="lg:w-[200px] md:w-[200px] absolute right-1 top-3 lg:top-14 w-[100px]"
            />
          </div>

          <div className="py-10 px-5 bg-gradient-to-br from-lime-400/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-1 space-y-3">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">
                  Speakers
                </p>
                <Button 
                  text="Browse"
                  bgColor={"bg-lime-300"}
                  textColor={"text-black/60"}
                />
              </div>
            </div>
            <img
              src={C6}
              alt=""
              className="lg:w-[290px] absolute top-3 right-1 sm:w-[320px] w-[260px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
