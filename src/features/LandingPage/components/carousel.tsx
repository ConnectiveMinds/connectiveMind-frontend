import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { getprojectForlanding } from "../../../services/api.services";

const Carousel = () => {
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    getprojectForlanding().then((data) => {
      console.log(data);
      setAllGroups(data["data"]);
    });
  }, []);

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
    <div className="flex justify-center mt-16">
      <div className="inline-block border-t-2 border-b-2 w-1/2 p-2">
        <div className="mx-8 my-4">
        <Slider {...settings} className="w-full">
          {allGroups.map((d: any) => (
            <div className="bg-white">
              <h2 className="text-purple-500 font-bold font-poppins text-xl">
                {d.title}
              </h2>
              
              <p className="mt-4 mb-8">{d.description}</p>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
