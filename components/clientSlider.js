import '../node_modules/swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

// Install modules

const ClientSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      navigation={false}
      pagination={{ clickable: true }}
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      effect="fade"
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide>
        <Image src="/images/clients/1.png" width={200} height={100} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/clients/2.png" width={200} height={100} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/clients/3.png" width={200} height={100} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/clients/6.png" width={200} height={100} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/clients/5.png" width={200} height={100} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/clients/4.png" width={200} height={100} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientSlider;
