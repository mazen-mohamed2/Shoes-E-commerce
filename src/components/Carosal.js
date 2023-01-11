import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

export default function App({Img3,Img2,Img1}) {
  return (
    <div style={{width:"100%"}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{height:"70vh", width:"100%"}}
      >
        <SwiperSlide >
        <div style={{display:"flex"}}>
        <div className="d-flex flex-column justify-content-start text-start align-self-center">

        <h1>Proident occaecat</h1>
        <h2>Tiny and Perfect eCommerce Template</h2>
        </div>
        <img src={Img1} alt=".." className="d-none d-sm-block" style={{width:"60vh", height:"60vh"}} />
        </div>
        </SwiperSlide>
        <SwiperSlide >
        <div style={{display:"flex"}}>
        <div className="d-flex flex-column justify-content-start text-start align-self-center">

        <h1>Proident occaecat</h1>
        <h2>Tiny and Perfect eCommerce Template</h2>
        </div>
        <img src={Img2} alt=".." className="d-none d-sm-block" style={{width:"60vh", height:"60vh"}}/>
        </div>
        </SwiperSlide>
        <SwiperSlide >
        <div style={{display:"flex"}}>
        <div className="d-flex flex-column justify-content-start text-start align-self-center">

        <h1>Proident occaecat</h1>
        <h2>Tiny and Perfect eCommerce Template</h2>
        </div>
        <img src={Img3} alt=".." className="d-none d-sm-block" style={{width:"60vh", height:"60vh"}}/>
        </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
}
