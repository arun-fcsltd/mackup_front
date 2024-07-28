
// import Link from "next/link"
'use client'
import Image from 'next/image';
import { CheckIcon } from "@heroicons/react/24/outline";
import ClientSlider from '@/components/ClientSlider';
import Testimonials from '@/components/Testimonials';


export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <section className="banner-section bg-[#000]" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center ">
            <div className="w-full md:w-6/12 px-[0px]">
              <Image className="banner-image " src="images/banner.svg"  width={500} height={500} alt="Illustration" />
            </div>
            <div className="w-full md:w-6/12 py-14 md:py-4 px-4 md:relative absolute left-0">
              <div className="banner-inner">
                <h4 className='ctheme font-semibold text-sm mb-4'>MAKEUP ARTIST</h4>
                <h1 className="heading-xl text-white text-2xl md:text-3xl lg:text-6xl font-normal uppercase">Wedding Makeup</h1>
                <p className='text-base line-clamp-2 text-white mt-[3em] md:mt-8 font-normal leading-10'>
                Hello, I’am Bobbi Noda! I love people love to fell beautiful, which is the reason I’ve spent last 12 years engulfed in doing Make up.
                </p>
                <button className="btn btn-darken btn-inline relative w-[180px] pl-[0px] mt-[2em] ">
                  <span className="h-16 w-16 rounded-full bg-[#A28075] absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-[1] transition-[400ms] hover:left-2/2"></span>
                  <span className="text-2xl text-white z-[2] relative">Our Services</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* services section */}
      <section className="py-16 services ">
        <div className="container mx-auto">
          <div className="text-center mb-[3em] ">
            <h4 className='ctheme font-semibold text-sm'>SERVICES THAT I PROVIDE</h4>
            <h2 className='text-3xl md:text-5xl'>Our Servies</h2>
          </div>
          <div className="columns-2 lg:columns-3 md:columns-2 gap-4">
            <div className="column">
              <div className="item">
                <div className="wrap">
                  <div className="img"> <Image width="300" height="300" alt="image" src="/images/services/3.jpg" className="img-fluid rounded-1" /> </div>
                  <div className="text">
                    <a href="#">
                      <h4> Facial Makeup</h4>
                      <p className="text-sm ctheme">Discover</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="item">
                <div className="wrap">
                  <div className="img"> <Image width="300" height="300" alt="image" src="/images/services/1-1.jpg" className="img-fluid rounded-1" /> </div>
                  <div className="text">
                    <a href="#">
                      <h4> Facial Makeup</h4>
                      <p className="text-sm ctheme">Discover</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="item">
                <div className="wrap">
                  <div className="img"> <Image width="300" height="300" alt="image" src="/images/services/2.jpg" className="img-fluid rounded-1" /> </div>
                  <div className="text">
                    <a href="#">
                      <h4> Facial Makeup</h4>
                      <p className="text-sm ctheme">Discover</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="item">
                <div className="wrap">
                  <div className="img"> <Image width="300" height="300" alt="image" src="/images/services/4.jpg" className="img-fluid rounded-1" /> </div>
                  <div className="text">
                    <a href="#">
                      <h4> Facial Makeup</h4>
                      <p className="text-sm ctheme">Discover</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="item">
                <div className="wrap">
                  <div className="img"> <Image width={300} height={300} style={{ height: 'auto', width: 'auto' }} alt="image" src="/images/services/6.jpg"  className="img-fluid rounded-1" /> </div>
                  <div className="text">
                    <a href="#">
                      <h4> Facial Makeup</h4>
                      <p className="text-sm ctheme">Discover</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="item">
                <div className="wrap">
                  <div className="img"> <Image width="300" height="300" alt="image" src="/images/services/5.jpg" className="img-fluid rounded-1" /> </div>
                  <div className="text">
                    <a href="#">
                      <h4> Facial Makeup</h4>
                      <p className="text-sm ctheme">Discover</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us Section */}
      <section className="py-8 md:py-16 bg-[#F9F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:16">
            <h2 className='text-3xl md:text-5xl'>About Us</h2>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
            <div className="column">
              <h4 className='ctheme font-semibold text-sm'>SERVICES THAT I PROVIDE</h4>
              <h2 className='text-3xl md:text-5xl mb-3 mt-3'>BookMyLook</h2>
              <p className='leading-8'>Welcome to <b>BookMyLook</b>, your ulti mate destination for connecting with top-tier makeup artists at your fingertips. We are an innovative online platform designed to bring the best beauty professionals to your doorstep, making it easier than ever to find, book, and enjoy exceptional makeup services.</p>
              <ul className='columns-2 pl-0 mt-10'>
                <li className='flex items-center mb-2'><CheckIcon className="w-5 h-5 bold mr-2  ctheme" />Face Makeup</li>
                <li className='flex items-center mb-2'><CheckIcon className="w-5 h-5 bold mr-2  ctheme" />Bridal Makeup</li>
                <li className='flex items-center mb-2'><CheckIcon className="w-5 h-5 bold mr-2  ctheme" />Wedding Makeup</li>
                <li className='flex items-center mb-2'><CheckIcon className="w-5 h-5 bold mr-2  ctheme" />Mehndi</li>
                <li className='flex items-center mb-2'><CheckIcon className="w-5 h-5 bold mr-2  ctheme" />Eyebrow Makeup</li>
                <li className='flex items-center mb-2'><CheckIcon className="w-5 h-5 bold mr-2  ctheme" />Drapping</li>
              </ul>
              {/* our mission */}
              <div className="">
                <h4 className='ctheme font-semibold text-2xl mt-10 mb-3'>Our Mission</h4>
                <p>At BookMyLook, our mission is to revolutionize your beauty service experience. We aim to provide a seamless, convenient, and personalized journey for both clients and makeup artists. Leveraging technology, we strive to create a thriving community where beauty professionals can showcase their talents and clients can discover the perfect match for their needs.</p>
                <a href="#" className='mt-5 rounded-sm py-3 px-6 block btn-theme text-white w-[150px] text-center'>Read More</a>
              </div>

            </div>

            <div className="column">
              <div className='relative flex justify-center items-center md:flex-col'>
                <div className="relative md:absolute md:right-0 md:top-0">
                  <Image width={300} height={400}  style={{ height: '300', width: 'auto' }}  alt="image" src="/images/services/5.jpg" />
                </div>
                <div className="relative md:absolute md:right-1/4 md:top-20">
                  <Image width={400} height={400}   alt="image" src="/images/services/4.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <ClientSlider />
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
           <div className="flex sm:flex-wrap md:flex-wrap items-center">
           <div className="w-full lg:w-6/12 md:w-6/12 object-none">
           <div className='pr-10 md:pr-[5em]'>
              <Image className='object-cover h-[250px] w-full' height={250} width={800} alt="image" src="/images/services/6.jpg" />
           </div>
           </div>
            <div className="w-full lg:w-6/12  md:w-6/12 sm:mt-10 mt-0">
                <h2 className="text-3xl md:text-5xl mb-3 uppercase">Join Us</h2>
                <p className='line-clamp-4 text-gray-500 leading-8 text-xl'>
                Whether you’re a makeup artist looking to expand your client base or a beauty enthusiast seeking the perfect artist, BookMyLook is here to transform your beauty service experience. Join our growing community today and discover a world where convenience meets excellence. Let us help you shine, one booking at a time.
                </p>
            </div>
           </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section><Testimonials/></section>

      
    </>
  );
}
