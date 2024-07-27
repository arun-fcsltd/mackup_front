import '../node_modules/swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // core version + all modules
import Image from 'next/image';

const Testimonials = () => {
    return (
        <>
            {/* style */}
            <style jsx>{`
            .testimonials::before{
                content:"";
                opacity:0.4;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 1;
                background:#000;
            }
        `}
            </style>
            <div className="testimonials py-20 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("../images/testimonial.webp")', backgroundAttachment: 'fixed' }}>

                <div className="container mx-auto px-4">
                    <span className="absolute top-[40%] left-[20%] h-[50px] w-[50px] rounded-full bg-[#A28075]"></span>
                    <span className="absolute top-[20%] left-[14px] h-[10px] w-[10px] rounded-full bg-[#A28075]"></span>
                    <span className="absolute bottom-[30px] left-[30%] h-[30px] w-[30px] rounded-full bg-[#A28075]"></span>
                    <span className="absolute bottom-[40px] left-[60px] h-[20px] w-[20px] rounded-full bg-[#A28075]"></span>
                    <span className="absolute top-[55%] left-[39%] h-[30px] w-[30px] rounded-full bg-[#A28075]"></span>
                    <div className="flex gap-4 md:flex-nowrap flex-wrap items-center">
                        <div className="md:w-7/12 w-full relative z-10">
                            <h4 className='ctheme font-semibold text-sm mb-4'>NEED HELP?</h4>
                            <h2 className="uppercase text-3xl text-white leading-relaxed">Do you need help with<br></br> creative make-up?</h2>
                        </div>
                        <div className="w-full md:w-5/12">
                            <div className="bg-white relative z-10 p-8 w-full rounded-md">
                                <h4 className="uppercase ctheme font-semibold text-sm">Testimonials</h4>
                                <h3 className="uppercase text-2xl font-bold mb-3">What Clients Say</h3>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    // navigation={true}
                                    // modules={[Pagination, Navigation]}
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                                >
                                    <SwiperSlide>
                                        <div className="item">
                                            <p className="line-clamp-4 text-md leading-relaxed text-gray-500 tracking-wider">Dan entesque magna magna semper daibus elisan the aliuen risus morbi tristique senectus et netus malesuan fames ac urpis miss muris in the sero dictum aselusion lacus suscipit congue the volutpat.</p>
                                          
                                            <div className="flex  items-center justify-between mt-4 border-t-2 border-[#ecd8d4] mt-4 pt-4 border-solid">
                                                <div className="flex items-center">

                                                    <div className="border-2 p-[4px] rounded-full border-[#ecd8d4]">
                                                        <Image width={60} height={60} style={{height:'auto',width:'auto'}} className='rounded-full' src="https://duruthemes.com/demo/html/noda/light/images/team/03.jpg" alt="" /> </div>
                                                    <div className="ml-4">
                                                        <h6 className="text-xl mb-1 tracking-wider text-gray-800 font-bold">John Smith</h6> <span className="text-gray-400">Customer</span>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <span className="quote"><Image src="/images/quote.png" alt="quote" width={65} height={65} /></span>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="item">
                                            <p className="line-clamp-4 text-md leading-relaxed text-gray-500 tracking-wider">Dan entesque magna magna semper daibus elisan the aliuen risus morbi tristique senectus et netus malesuan fames ac urpis miss muris in the sero dictum aselusion lacus suscipit congue the volutpat.</p>

                                            <div className="flex  items-center justify-between mt-4 border-t-2 border-[#ecd8d4] mt-4 pt-4 border-solid">
                                                <div className="flex items-center">

                                                    <div className="border-2 p-[4px] rounded-full border-[#ecd8d4]">
                                                        <Image width={60} height={60} style={{height:'auto',width:'auto'}} className='rounded-full' src="https://duruthemes.com/demo/html/noda/light/images/team/03.jpg" alt="" /> </div>
                                                    <div className="ml-4">
                                                        <h6 className="text-xl mb-1 tracking-wider text-gray-800 font-bold">William Smith</h6> <span className="text-gray-400">Customer</span>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <span className="quote"><Image src="/images/quote.png" alt="quote" width={65} height={65} /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonials;