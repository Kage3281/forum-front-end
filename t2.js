import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css'

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function NewsBlock() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <a href="#">
            <img className="img-fluid" src="/forum-pic/news-01.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <a href="#">
            <img className="img-fluid" src="/forum-pic/news-02.jpg" />
          </a>
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <a href="#">
            <img className="img-fluid" src="/forum-pic/news-03.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <a href="#">
            <img className="img-fluid" src="/forum-pic/news-01.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <a href="#">
            <img className="img-fluid" src="/forum-pic/news-02.jpg" />
          </a>
        </SwiperSlide>{" "}
        <SwiperSlide>
          {" "}
          <a href="#">
            <img className="img-fluid" src="/forum-pic/news-03.jpg" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
