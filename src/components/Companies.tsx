import React from 'react'
import Company from './Company'
import "./Companies.css"
// JSON
import companiesAbout from '../companies.json'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Companies: React.FC = () => {
  return (
    <div className='companies '>
      <div className='d-flex justify-content-around py-5 container'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
        >
      {
      companiesAbout.map(oneMelumat => (
        <SwiperSlide><Company companiesImg={oneMelumat.companies_foto} /></SwiperSlide>
      ))
      }
      </Swiper></div>
     
    </div>

  )
}
export default Companies