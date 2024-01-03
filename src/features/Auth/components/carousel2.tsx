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
      
    });
  },[]);
  useEffect(()=>
  {
    console.log(reviews);
  })
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  return (
    <>
      <div className="flex mt-16 max-w-sm max-h-screen">
        <div className="inline-block border-t-2 border-b-2  w-full p-2 border-purple-400">
          <div className="mx-8 my-4">
          <Slider {...settings} className="w-full">
            {reviews.map((d:any) => (
            //   <div className="bg-white">
            //   <h2 className="text-purple-500 font-bold font-poppins text-xl">
            //     {d.userId.name}
            //   </h2>
              
            //   {/* <p className="mt-4 mb-8">{d.description}</p> */}
            // </div>
              <div>
                <div className="flex flex-row items-center gap-2">
                  <img className="w-14 h-14 rounded-full" src={d.userId.avatar == null ? ("public/avatar.png") :(d.userId.avatar)} alt="Rounded avatar"></img>
                  <p className="text-purple-500 font-semibold font-poppins tracking-wide text-xl">
                  {d.userId.name}
                  </p>  
                </div>
                <p className="mt-8 mb-8 text-base font-medium ">{d.review}</p>
              </div>
             
            ))}
          </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel2;
