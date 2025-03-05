"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App({}) {
  const lastNews = [
    {
      title: "عنوان خبر",
      date: "1403",
      view: "1",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
        img:"/images/news/test.png"
    },
    {
      title: "عنوان خبر",
      date: "1402",
      view: "2",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",img:"/images/news/test2.png"
    },
    {
      title: "عنوان خبر",
      date: "1401",
      view: "3",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",img:"/images/news/test.png"
    },
    {
      title: "عنوان خبر",
      date: "1399",
      view: "4",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",img:"/images/news/test2.png"
    },

  
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full "
      >
        {lastNews.map((item,key)=>{
          return(
            <> <SwiperSlide key={key}>
           <div  style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }} className='h-full rounded-2xl'>

         {item.title}
         <div>
          <p>{item.date}</p>
          <p>{item.view}</p>
          </div>    </div>
            </SwiperSlide>
            </>
          )
        })}
       
        
      </Swiper>
    </>
  );
}
