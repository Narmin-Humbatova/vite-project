import React from 'react'
import ProductCard from './ProductCard'
import './Curated.css'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';


const Curated:React.FC= () => {
  return (
    <div className='curated-section py-5 py-md-5'>
      <div className="container">
      <h4 className='limit text-center'>From curated essentials to limited-run editions.</h4>
        <p className='make text-center py-4'>We make products inspired by traditions – and we're starting with one you might be familiar with: Dinner.</p>
      
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper py-3"
      >
        <SwiperSlide><ProductCard fotoProps = "/images/card/card1.svg" nameProps = "Side Bowls" setOfProps="SET OF 4" priceProps="$45" deckProps="Hand-painted porcelain stackable bowls, designed for plating, eating, and scooping." classAdi="bowl"/></SwiperSlide>
        <SwiperSlide><ProductCard fotoProps = "/images/card/card2.svg" nameProps='Drinking Glasses' setOfProps="SET OF 4" priceProps="$50" deckProps="Hand-made and stackable. Made from recycled glass and natural sand. Naturally colored, without dyes." classAdi="glasses"/></SwiperSlide>
        <SwiperSlide><ProductCard fotoProps = "/images/card/card3.svg" nameProps='Main Plates' setOfProps="SET OF 4" priceProps="$50" deckProps="Hand-painted porcelain plates, stackable and designed for big appetites." classAdi="plates"/></SwiperSlide>
        <SwiperSlide><ProductCard fotoProps = "/images/card/card4.svg" nameProps='Always Pan' setOfProps="SET OF 4" priceProps="$145" deckProps="Thoughtfully designed to be the perfect size and shape to do the work of eight pieces of traditional cookware." classAdi="pan"/></SwiperSlide>
        <SwiperSlide><ProductCard fotoProps = "/images/card/card1.svg" nameProps = "Side Bowls" setOfProps="SET OF 4" priceProps="$45" deckProps="Hand-painted porcelain stackable bowls, designed for plating, eating, and scooping." classAdi="bowl"/></SwiperSlide>
        <SwiperSlide><ProductCard fotoProps = "/images/card/card2.svg" nameProps='Drinking Glasses' setOfProps="SET OF 4" priceProps="$50" deckProps="Hand-made and stackable. Made from recycled glass and natural sand. Naturally colored, without dyes." classAdi="glasses"/></SwiperSlide>
        <SwiperSlide><ProductCard fotoProps = "/images/card/card3.svg" nameProps='Main Plates' setOfProps="SET OF 4" priceProps="$50" deckProps="Hand-painted porcelain plates, stackable and designed for big appetites." classAdi="plates"/></SwiperSlide>
        <SwiperSlide><ProductCard fotoProps = "/images/card/card4.svg" nameProps='Always Pan' setOfProps="SET OF 4" priceProps="$145" deckProps="Thoughtfully designed to be the perfect size and shape to do the work of eight pieces of traditional cookware." classAdi="pan"/></SwiperSlide>  
     </Swiper>
      </div>
    </div>
  )
}

export default Curated