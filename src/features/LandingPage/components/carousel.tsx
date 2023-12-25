import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { getAllProjects } from "../../../services/api.services";

const Carousel = () => {
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    getAllProjects().then((data) => {
      setAllGroups(data["data"]);
    });
  }, []);

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
    <div className="flex justify-center mt-20">
      <div className=" max-h-32 overflow-hidden inline-block border-t-2 border-b-2 w-[80ch] p-2">
        <Slider {...settings} className="overflow-hidden">
          {allGroups.map((d: any) => (
            <div className="bg-white">
              <h2 className="text-[rgb(151,97,208)] font-semibold text-[1.5rem] mb-2">
                {d.title}
              </h2>
              <p>{d.description}</p>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
