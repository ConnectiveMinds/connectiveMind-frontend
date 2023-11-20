import React from 'react'
import data from "../Data/projects.json"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 4,
        swipe:true
    }
  return (
    <div className=" flex 3/4 justify-center">
        <div className=" inline-block mt-20 border-t-2 border-b-2 w-[40ch]">
              <Slider {...settings}>
                    {data.map((d) => (
                    <div className="bg-white">
                        <h2 className="text-[rgb(151,97,208)] font-semibold">{d.topic}</h2>
                        <p>{d.description}</p>
                    </div>
                ))}
              </Slider>
          
      </div>
    </div>
  );
}

export default Carousel

