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
      <div className="description">
        <div className="intro">
          <header className="inline-block font-bold text-[2rem] drop-shadow-2xl">
            Meet
            <span className="text-[rgba(119,65,170,1)]">
              {" "}
              ConnectiveMinds
            </span>{" "}
          </header>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            reprehenderit sit beatae ducimus, consectetur dignissimos nisi.
            Ipsum culpa delectus magni in quisquam quia ut sed vel blanditiis
            fugit! Temporibus, iure.
          </div>
          <button onClick={()=>exploreToSection(explore)} className="colored">Explore</button>
        </div>
        <div className="inline-block  flex justify-content">
          <img
            className="inline-block absolute z-[2] opacity-80  h-[70vh] w-[40vw] "
            src="src\Data\Ellipse 1.png"
            alt=""
          />
          <img
            className="inline-block absolute"
            src="src\Data\Connective Minds (3) 1.png"
            alt=""
          />
        </div>
      </div>
      <h1 ref={explore} className="m-4 inline-block font-bold text-[2rem] text-[rgba(119,65,170,1)]">
        Explore
      </h1>
    </>
  );
}
