import { useRef } from "react";

export function Description() {
  const explore = useRef(null);
  const exploreToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="description flex flex-col md:flex-row">
        <div className="intro md:mr-8">
          <header className="font-bold text-2xl sm:text-4xl mb-4 sm:mb-8 text-center sm:text-left">
            Meet
            <span className="text-purple-700"> ConnectiveMinds</span>{" "}
          </header>
          <div className="about text-center md:text-left">
            Welcome To ConnectiveMind collabrate and connect with people of
            interest
          </div>
          <button onClick={() => exploreToSection(explore)} className="colored">
            Explore
          </button>
        </div>
        <div className="flex justify-content pl-8">
          <img
            className="md:inline-block absolute z-[2] opacity-80  md:h-[70vh] md:w-[40vw] hidden "
            src="src\Data\Ellipse 1.png"
            alt=""
          />
          <img
            className="md:inline-block hidden absolute z-[2] opacity-80  md:h-[110vh] md:w-[40vw]"
            src="src\Data\Connective Minds (3) 1.png"
            alt=""
          />
        </div>
      </div>
      <h1
        ref={explore}
        className="m-4 font-bold text-2xl text-purple-700 text-center"
      >
        Explore
      </h1>
    </>
  );
}
