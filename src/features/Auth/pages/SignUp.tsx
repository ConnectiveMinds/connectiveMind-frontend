import Carousel2 from "../components/carousel2";
import SignUpForm from "../components/SignUpForm";

export function SignUp() {
  return (
    <div className="m-8 p-4">
      <img className=" p-0 h-24" src="../src/Data/Connective 1.png" alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div className="md:pr-8 space-y-2">
          <header className="font-bold text-2xl md:text-3xl lg:text-4xl drop-shadow-2xl md:mt-20 mt-10">
            <div>Start Your </div>
            Journey With
            <span className="text-[rgba(119,65,170,1)]"> ConnectiveMinds</span>
          </header>
          <div className="hidden md:block">
            <Carousel2 />
          </div>
        </div>
        <div className="flex flex-col mt-8 md:mt-0">
          <SignUpForm />
        </div>
        <div className="md:hidden">
          <Carousel2 />
        </div>
      </div>
    </div>
  );
}
