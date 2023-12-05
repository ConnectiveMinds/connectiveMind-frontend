import React from "react";
import Carousel2 from "../components/carousel2";
import SignUpForm from "../components/SignUpForm";

export function SignUp() {
  
  return (
    <div className="m-8 p-4">
      <img className=" p-0 h-24" src="../src/Data/Connective 1.png" alt="" />
      <div className="grid grid-cols-2">
        <div className="space-y-2">
          <header className="font-bold text-[2rem] drop-shadow-2xl mt-20">
            <div>Start Your </div>
            Journey With
            <span className="text-[rgba(119,65,170,1)]"> ConnectiveMinds</span>
          </header>
          <Carousel2 />
        </div>
        <div className="flex ml-20">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
