// pages/about.js
'use client'
import Image from 'next/image'
import {CheckIcon} from '@heroicons/react/24/outline'
import Breadcrumb from '@/components/Breadcrumb'
import ClientSlider from '@/components/ClientSlider';



const About = ()=> {
  return (
    <>
       <Breadcrumb title={"About Us"} />
    {/* About us Section */}
    <section className="py-8 md:py-16 bg-[#F9F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:16">
            <h2 className='text-3xl md:text-4xl'>About Us</h2>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="column">
              <h4 className='ctheme font-semibold text-sm'>SERVICES THAT I PROVIDE</h4>
              <h2 className='text-3xl md:text-4xl mb-3 mt-3'>BookMyLook</h2>
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

      <section className="py-8 md:py-16">
        <div className='container mx-auto px-4 '>
        <div className="flex md:flex-row flex-col">
          <div className='md:w-1/2 w-full pr-0 md:pr-4'>
            <Image width={400} height={600}  className='md:mb-2 mb-10 w-[600px] md:h-[600px] h-[400px] object-cover' alt="image" src="/images/about_2.svg" />
          </div>
          <div className='md:w-1/2 w-full pl-0 md:pl-4'>
            
            <h2 className='text-3xl md:text-4xl'>What We Offer</h2>
            <h3 className='text-xl md:text-2xl py-4 md:py-8'>For Clients</h3>
            <p className='font-bold'>Convenience</p>
            <p className='mb-2 md:mb-7'>⁠Access a wide range of talented makeup artists in your area, all in one place. Our user-friendly platform allows you to browse profiles, view portfolios, read reviews, and book appointments at your convenience.</p>
            <p className='mb-2 md:mb-7'>Choice Whether you’re looking for a bridal makeup artist, a specialist for a glamorous event, or a professional for a casual outing, we’ve got you covered. Choose from a diverse selection of artists, each with unique skills and styles to suit your preferences.</p>
            <p className='mb-2 md:mb-7'><span className='font-bold'>Quality :</span> We onboard only the best in the industry, ensuring every artist on our platform meets high standards of professionalism and expertise. Your satisfaction is our priority.</p>
            <p className='mb-2 md:mb-7'><span className='font-bold'>Personalized :</span> Recommendations: Our platform suggests makeup artists based on your preferences and past experiences, ensuring you find the perfect match for every occasion.</p>
            <p><span className='font-bold'>Verified</span>: Professionals: All makeup artists on <span className=' font-bold'>BookMyLook</span> undergo a thorough verification process, giving you peace of mind about the quality and safety of the services you receive.</p>
          </div>

        
        </div>
        <div className='w-full pt-3 md:pt-10'>
          <h3 className='text-xl md:text-2xl py-4 md:py-8'>For Makeup Artists:</h3>
              <ul className="pl-[25px] list-disc">
                <li className='mb-2 md:mb-7'><span className='font-bold'>Exposure: </span>Gain visibility and attract new clients by showcasing your work on our platform. With BookMyLook, your talent can reach a wider audience, helping you grow your business.</li>
                <li className='mb-2 md:mb-7'><span className='font-bold'>Flexibility: </span>Manage your schedule effortlessly with our intuitive booking system. Set your availability, accept or decline bookings, and communicate directly with clients to ensure a smooth experience.</li>
                <li className='mb-2 md:mb-7'><span className='font-bold'>Support: </span> We provide tools and resources to help you succeed, from marketing your services to handling payments securely. Focus on what you do best – making people look and feel beautiful.</li>
                <li className='mb-2 md:mb-7'><span className='font-bold'>Growth Opportunities: </span> Access resources and training to continually improve your skills and expand your service offerings.</li>
                <li className='mb-2 md:mb-7'><span className='font-bold'>Community: </span>Community: Join a supportive network of fellow makeup artists, where you can share experiences, tips, and opportunities.</li>
              </ul>
            </div>
            </div>
      </section>
    </>
  )
}
export default About
