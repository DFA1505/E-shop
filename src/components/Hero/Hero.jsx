import React from "react";
import Slider from "react-slick";
import Hs1 from "../../assets/Hero/Hs1.png";
import Hs2 from "../../assets/Hero/Hs2.png";
import Hs3 from "../../assets/Hero/Hs3.png";
import Button from "../Shared/Button";

const HeroSlide = [
  {
    id: 1,
    img: Hs1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Hs2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Hs3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Laptops",
  },
];

const Hero = ({ handleOrderPopUp }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    arrows: false,
  };

  return (
    <div className="container mt-6">
      <div className="overflow-hidden rounded-3xl hero-bg-color min-h-[550px] sm:min-h-[650px] flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroSlide.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm: pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      onClick={handleOrderPopUp}
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset='0'
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>

                  <div className="order-1 sm:order-2">
                    <div data-aos='zoom-in' data-aos-once='true'>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[350px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 xl:translate-x-28 sm:-translate-x-2 lg:w-[280px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
