import Link from 'next/link';
import Image from 'next/image';
import CheckIcon from '@heroicons/react/24/outline/CheckIcon';
const Footer = () => {
  const quickLink = [
    {
      name: "Log In",
      url: "login"
    },
    {
      name: "Sign Up",
      url: "signup"
    },
    {
      name: "Contact Us",
      url: "contact"
    },
    {
      name: "About Us",
      url: "about"
    }
  ]
  const serviesLinks = [
    {
      name: "Bridal Makeup",
      url: "/"
    },
    {
      name: "Mehndi",
      url: "/"
    },
    {
      name: "Drapping",
      url: "/"
    },
    {
      name: "Face Makeup",
      url: "/"
    }, {
      name: "Wedding Makeup",
      url: "/"
    },
    {
      name: "Eyebrow Makeup",
      url: "/"
    }
  ]
  return (
    <>
      <div className="container mt-16 mx-auto px-4">
        <h3 className='uppercase font-semibold text-4xl mb-8  text-center'>Contact Us </h3>
        <div className="rounded-xl p-8 bg-[var(--theme)] flex items-center justify-between mb-[-4em] relative z-[10]">
          <div className="w-full md:w-1/3 flex">
            <Image src="../images/footer/call.svg" className='mr-4' width={60} height={60} alt="logo" />
            <div>
              <p className="text-white mb-0 text-md">Call Now</p>
              <h4 className='text-white text-normal text-xl'>+91 9871551426</h4>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex">
            <Image src="../images/footer/email.svg" className='mr-4' width={60} height={60} alt="logo" />
            <div>
              <p className="text-white mb-0 text-md">Email</p>
              <h4 className='text-white text-normal text-xl'>arun@example.com</h4>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex">
            <Image src="../images/footer/address.svg" className='mr-4' width={60} height={60} alt="logo" />
            <div>
              <p className="text-white mb-0 text-md">Address</p>
              <h4 className='text-white text-normal text-xl'>New Delhi, India-110076</h4>
            </div>
          </div>
        </div>
      </div>



      {/* footer Start */}
      <footer className="bg-[#000] text-white pt-[9em] px-4">
        <div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
          <div className="w-full md:w-3/9 pr-0 md:pr-16">
            <h3 className="uppercase font-normal text-2xl text-white">About Us</h3>
            <p className="text-white leading-relaxed mt-4 text-justify">
              Nulla posuere tortoran nisan sempere scelerisque etiam ornare iros metusan the ravidane sodales vesaire. Integer ac molestie nisi orci varius natoque penatis magnis the duru parturient montes, nascetur ridiculus mus.
            </p>
            <ul className="flex items-center mt-4 pl-0 gap-3">
              <li>
                <Link href="#" target='_blank'>
                  <Image src="./images/footer/instagram.svg" width={40} height={40} alt="Instagram" />
                </Link>
              </li>

              <li>
                <Link href="#" target='_blank'>
                  <Image src="./images/footer/twitter.svg" width={40} height={40} alt="twitter" />
                </Link>
              </li>

              <li>
                <Link href="#" target='_blank'>
                  <Image src="./images/footer/whatsApp.svg" width={40} height={40} alt="whatsApp" />
                </Link>
              </li>

              <li>
                <Link href="#" target='_blank'>
                  <Image src="./images/footer/gmail.svg" width={40} height={40} alt="gmail" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-3/9">
            <h3 className="uppercase font-normal text-2xl mb-4">Quick Links</h3>
            <ul className='list-disc'>
              {quickLink.map((link, qlinkIndex) => {
                return (
                  <li key={qlinkIndex} className='mb-2'><Link href={link.url} className='text-white'>{link.name}</Link></li>

                )
              })}
            </ul>
          </div>
          <div className="w-full md:w-3/9">
            <h3 className="uppercase font-normal text-2xl mb-4">Our Services</h3>
            <ul className='pl-0'>
              {serviesLinks.map((link, secviceIndex) => (
                <li key={secviceIndex} className='mb-2'><Link href={link.url} className='text-white'><CheckIcon className="ctheme inline h-[18px] w-[18px] mr-2" />{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom Footer */}
        <div className="border-t-2 border-[var(--theme)] mt-8">
          <p className="text-white text-center py-4 mb-0 text-md tracking-wide">Copyright © {new Date().getFullYear()}. All Rights Reserved. Design by Arun Singh</p>
        </div>
      </footer >
    </>
  );
};

export default Footer;
