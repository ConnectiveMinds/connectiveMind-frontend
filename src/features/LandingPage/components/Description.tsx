
import BG from "../../../Data/des.svg";
export function Description() {
 
  // const exploreToSection = (elementRef: any) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-center">
        <div className="">
          <p className="font-bold text-2xl sm:text-4xl mb-4 sm:mb-4 text-center font-poppins sm:text-left">
            Meet
            <span className="text-purple-700 font-poppins"> ConnectiveMinds</span>{" "}
          </p>
          <div className="">
            <p className="text-center font-poppins md:text-left text-sm md:text-base">
          Where people effortlessly collaborate on projects. Discover ideal teammates, share resources, and track progress seamlessly. Simplify teamwork and elevate project success with   
          </p>
          <p className="text-center text-purple-700 font-poppins md:text-left">
          ConnectiveMinds!  
          </p>
          <button className="mt-6 border-2 border-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-purple-600 focus:ring-purple-300 text-purple-600  font-bold tracking-normal  rounded-md  md:text-base px-8 py-2 text-center me-2 mb-2">JOIN US NOW</button>
          </div>
          {/* <button type="button" className="mt-6 border-2 border-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-purple-600 focus:ring-purple-300 text-purple-600  font-bold tracking-normal rounded-md  md:text-base px-8 py-2 text-center me-2 mb-2"><p className="text-center md:text-left">JOIN US NOW</p></button> */}
        </div>
        <div className="flex">
         <img
            src={BG}
            width={800}
            height={500}

          />
       
         
        </div>
      </div>
     
    </div>
  );
}
