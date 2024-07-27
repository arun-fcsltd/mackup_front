'use client'
import Testimonials from '@/components/testimonials';
import BookArtistForm from '@/components/bookingArtistForm';
import Breadcrumb from '@/components/breadcrumb';

const ARTIST = () => {

    return (
        <>

            <Breadcrumb title={"Book A artist"}  />
            {/* Form Section */}
            <div className="container py-20 mx-auto px-4">
                <div className='flex gap-4 md:flex-nowrap flex-wrap'>
                    <div className="md:w-[65%] w-full">
                        <h3 className='uppercase ctheme text-3xl mb-2'>Book A artist</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>

                        {/* Form */}
                        <BookArtistForm />

                    </div>
                    <div className='hidden md:block w-[35%] bg-cover bg-no-repeat bg-center rounded-lg' style={{ background: 'url("../images/formside.webp")' }}>

                    </div>
                </div>
            </div>


            {/* Form Section end */}

            <Testimonials />
        </>
    )
}
export default ARTIST;