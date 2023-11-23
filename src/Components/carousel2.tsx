import React from "react";
import data from "../Data/people.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
    swipe: true,
  };
  return (
    <div className="1/2 flex">
      <div className=" mt-20 w-[100%]">
        <Slider {...settings}>
          {data.map((d) => (
            <div className=" flex bg-[rgba(119,65,170,1)] p-4 rounded-[20px] ">
              <ul className="flex items-center ">
                <li>
                  <div className="rounded-[100%] bg-[white] border-black  overflow-auto">
                    <img className="h-16 inline-block" src={d.image} alt="" />
                  </div>
                </li>
                <li>
                  <h3 className="inline-block text-[1.5rem] font-semibold text-[white] p-5">{d.name}</h3>
                </li>
              </ul>
              <p className="text-[white]">{d.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel2;
