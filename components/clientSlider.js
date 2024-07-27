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
    >
      <SwiperSlide>
        <Image src="https://duruthemes.com/demo/html/noda/light/images/clients/1.png" width={200} height={100} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://duruthemes.com/demo/html/noda/light/images/clients/2.png" width={200} height={100} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://duruthemes.com/demo/html/noda/light/images/clients/3.png" width={200} height={100} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://duruthemes.com/demo/html/noda/light/images/clients/6.png" width={200} height={100} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://duruthemes.com/demo/html/noda/light/images/clients/5.png" width={200} height={100} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="https://duruthemes.com/demo/html/noda/light/images/clients/4.png" width={200} height={100} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientSlider;
