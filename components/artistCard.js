import Image from 'next/image'
import Link from 'next/link'
import {MapPinIcon} from '@heroicons/react/24/outline'
const ArtistCard = () => {
    return(
        <>
          <div className="border border-gray-200 p-2 rounded-md max-w-[300px] shadow-sm mx-auto mb-4">
            <Image src="/images/services/1-1.jpg" className='w-full h-[200px] object-cover rounded-md' width={200} height={200} />
            <div className="">
              <h2 className="md:text-xl text-xl font-semibold text-center pt-2">Bobbi Noda</h2>
              <p className="text-center ctheme text-sm">Makeup & Hair Cut</p>
                <p className='border-b border-gray-200 relative my-3'><MapPinIcon className='h-6 w-6 p-1 text-gray-500 bg-white absolute inset-0 m-auto'/> </p>
                <p className="text-center text-sm text-gray-500">Los Angeles, California </p>


                <div className="flex items-center justify-between w-full py-3 px-3">
                    <div className='w-[55px] text-left'>
                        <p className="text-center text-sm text-gray-900">4.5</p>
                        <p className="text-center text-[12px] text-gray-500">Rating</p>
                    </div>
                    <div className='w-[55px] text-center'>
                        <p className="text-center text-sm text-gray-900">8 Hours</p>
                        <p className="text-center text-[12px] text-gray-500">Availability</p>
                    </div>
                    <div className='w-[55px] text-right'>
                        <p className="text-center text-sm text-gray-900">5 Years</p>
                        <p className="text-center text-[12px] text-gray-500">Experience</p>
                    </div>
                </div>
                {/* button */}
                <div className="">
                   <Link href="/services" className='hover:bg-cyan-800 px-4 py-1.5 text-[0.9em] w-1/2 text-center inline-block border border-[var(--theme)] theme text-white'>View Profile</Link>
                   <Link href="/services" className='hover:bg-cyan-800 hover:text-white px-4 py-1.5 w-1/2 text-[0.9em] text-center inline-block border border-[var(--theme)] ctheme'>Book Now</Link>
                </div>
            </div>
          </div>
        </>
    )
}
export default ArtistCard;