import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../assets/banner1.png";
import bannerImg2 from "../../assets/banner2.png";
import bannerImg3 from "../../assets/banner3.png";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        
        {/* Slide 1 */}
        <div className="relative">
          <img src={bannerImg1} className="w-full" />

          <div
            className="
              absolute
              bottom-6 left-1/2 -translate-x-1/2
              sm:bottom-10 sm:left-10 sm:translate-x-0
              md:bottom-16 md:left-16
              lg:bottom-20 lg:left-20
              flex items-center gap-3
            "
          >
            <button className="btn btn-primary text-black flex items-center gap-2 rounded-2xl">
              Track Your Parcel
              <MdArrowOutward className="text-xl" />
            </button>

            <button className="btn rounded-2xl">Be a Rider</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img src={bannerImg2} className="w-full" />

          <div
            className="
              absolute
              bottom-6 left-1/2 -translate-x-1/2
              sm:bottom-10 sm:left-10 sm:translate-x-0
              md:bottom-16 md:left-16
              lg:bottom-20 lg:left-20
              flex items-center gap-3
            "
          >
            <button className="btn btn-primary text-black flex items-center gap-2 rounded-2xl">
              Track Your Parcel
              <MdArrowOutward className="text-xl" />
            </button>

            <button className="btn rounded-2xl">Be a Rider</button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img src={bannerImg3} className="w-full" />

          <div
            className="
              absolute
              bottom-6 left-1/2 -translate-x-1/2
              sm:bottom-10 sm:left-10 sm:translate-x-0
              md:bottom-16 md:left-16
              lg:bottom-20 lg:left-20
              flex items-center gap-3
            "
          >
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
