import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { getReviews } from "../../../services/api.services";


const Carousel2 = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) => {
      setReviews(data["data"]);
      console.log(reviews);
    });
  },[]);
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <>
      <div className="flex justify-start">
        <div className="inline-block border-t-2 border-b-2 w-1/2 p-2">
          <div className="mx-8 my-4">
          <Slider {...settings} className="w-full">
            {reviews.map((d:any,index) => (
              
              <div key={index}>

                <h2 className="text-purple-500 font-bold font-poppins text-xl">
                {d.name}
                </h2>
                <p className="mt-4 mb-8">{d.review}</p>
              </div>
              // <div className=" flex bg-[rgba(119,65,170,1)] p-4 rounded-[20px] ">
              //   <ul className="flex items-center ">
              //     <li key={index}>
              //       <div className="rounded-[100%] bg-[white] border-black  overflow-auto">
              //         <img className="h-16 inline-block" alt="" />
              //       </div>
              //     </li>
              //     <li key={d.name}>
              //       <h3 className="inline-block text-[1.5rem] font-semibold text-[white] p-5">
              //         {d.name}
              //       </h3>
              //     </li>
              //   </ul>
              //   <p className="text-[white]">{d.review}</p>
              // </div>
            ))}
          </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel2;
