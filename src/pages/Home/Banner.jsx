import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../../assets/banner1.png";
import bannerImg2 from "../../assets/banner2.png";
import bannerImg3 from "../../assets/banner3.png";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="relative">
          <img src={bannerImg1} className="w-full" />

          <div className="absolute bottom-20 left-22 flex items-center gap-3">
            <button className="btn btn-primary text-black flex items-center gap-2 rounded-2xl">
              Track Your Parcel
              <MdArrowOutward className="text-xl" />
            </button>

            <button className="btn rounded-2xl">Be a Rider</button>
          </div>
        </div>
        <div className="relative">
          <img src={bannerImg2} className="w-full" />

          <div className="absolute bottom-20 left-22 flex items-center gap-3">
            <button className="btn btn-primary text-black flex items-center gap-2 rounded-2xl">
              Track Your Parcel
              <MdArrowOutward className="text-xl" />
            </button>

            <button className="btn rounded-2xl">Be a Rider</button>
          </div>
        </div>
        <div className="relative">
          <img src={bannerImg3} className="w-full" />

          <div className="absolute bottom-20 left-22 flex items-center gap-3">
            <button className="btn btn-primary text-black flex items-center gap-2 rounded-2xl">
              Track Your Parcel
              <MdArrowOutward className="text-xl" />
            </button>

            <button className="btn rounded-2xl">Be a Rider</button>
          </div>
        </div>


      </Carousel>
    </div>
  );
};

export default Banner;
