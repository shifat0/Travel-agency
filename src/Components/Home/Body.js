import React, { useEffect, useState } from "react";
import "./Body.css";
import rightIcon from "../../images/right-icon.svg";
import { SliderData } from "../Data/SliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import Slider from "./Slider";

SwiperCore.use([Navigation, Autoplay]);

const Body = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const activeSlide = SliderData.find(
      (slide, index) => index.toString() === slideIndex.toString()
    );
    setBooking(activeSlide);
  }, [slideIndex]);

  const clickHandler = (swipe) => {
    if (swipe.clickedSlide) {
      if (swipe.clickedSlide.attributes) {
        let a = swipe.clickedSlide.attributes.getNamedItem(
          "data-swiper-slide-index"
        ).value;
        setSlideIndex(a);
      }
    }
  };

  return (
    <div className="body-container">
      <div className="details">
        <h1>{booking.name}</h1>
        <p>{booking.description?.slice(0, 100)} ...</p>
        <button className="booking">
          Booking <img src={rightIcon} alt="right-icon" />
        </button>
      </div>

      <Swiper
        spaceBetween={35}
        slidesPerView={2}
        navigation
        // autoplay={{ delay: 2000, disableOnInteraction: true }}
        loop={true}
        onClick={(swipe) => clickHandler(swipe)}
        onSlideChange={(swipe) => setSlideIndex(swipe.realIndex)}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {SliderData.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => <Slider isActive={isActive} slide={slide} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Body;
