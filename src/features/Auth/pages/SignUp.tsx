import Carousel2 from "../components/carousel2";
import SignUpForm from "../components/SignUpForm";

export function SignUp() {
  return (
    <div className="max-w-screen-xl mx-auto my-2">
       <div className="flex justify-center md:justify-start">
        <img src="src\Data\Connective_logo.png" alt="Logo" />
      </div>
      <div className="flex flex-row justify-center">
        <div className="md:pr-8 space-y-2">
          <header className="font-bold text-2xl md:text-3xl lg:text-4xl drop-shadow-2xl md:mt-20 mt-10">
            <div>Start Your </div>
            Journey With
            <span className="text-[rgba(119,65,170,1)]"> ConnectiveMinds</span>
          </header>
          <div className="">
            <Carousel2 />
          </div>
        </div>
        <div className="hidden  md:inline-block h-[540px] min-h-[1em] w-px self-stretch bg-purple-700 opacity-100 "></div>
        <div className="flex flex-col mt-8 md:mt-0">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
