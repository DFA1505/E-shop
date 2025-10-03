import React from "react";
import Button from "../Shared/Button";
import C1 from "../../assets/Category/C1.png";
import C2 from "../../assets/Category/C2.png";
import C3 from "../../assets/Category/C3.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="py-10 px-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="">
              <div className="mb-1 space-y-3">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={C1}
              alt=""
              className="w-[320px] absolute top-3 -right-7"
            />
          </div>

          <div className="py-10 px-5 bg-gradient-to-br from-blue-400 to-gray-400 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb- space-y-3">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-4">
                  Gadgets
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-blue-500"}
                  textColor={"text-gray-300"}
                />
              </div>
            </div>
            <img
              src={C2}
              alt=""
              className="w-[320px] absolute top-0 -right-11"
            />
          </div>

          <div className="col-span-2 py-10 px-5 bg-gradient-to-br from-lime-400/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-1 space-y-3">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">
                  Laptops
                </p>
                <Button 
                  text="Browse"
                  bgColor={"bg-lime-300"}
                  textColor={"text-black/60"}
                />
              </div>
            </div>
            <img
              src={C3}
              alt=""
              className="lg:w-[320px] absolute top-3 right-5 sm:w-[320px] w-[260px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
