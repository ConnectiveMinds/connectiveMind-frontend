import React from "react";
import Carousel2 from "../Components/carousel2";
import SignUpForm from "../Components/SignUpForm";

export function SignUp() {
  return (
    <>
      <div className="m-4 p-4 fle">
        
          <img
            className="m-5 p-0 h-24"
            src="../src/Data/Connective 1.png"
            alt=""
          />

          <header className="inline-block font-bold text-[2rem] drop-shadow-2xl mt-20 w-[25 %]">
            <div>Start Your</div> Journey With
            <span className="text-[rgba(119,65,170,1)]"> ConnectiveMinds</span>
          </header>
          <Carousel2 />

         
            <SignUpForm />
          
       
      </div>
    </>
  );
}
