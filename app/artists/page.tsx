'use client'
import Testimonials from '@/components/testimonials';
import StarRating from '@/components/StarRating';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ArtistCard from '@/components/artistCard';
import Breadcrumb from '@/components/breadcrumb';



const Artists = () => {

    const handleRatingSelect = (rating: any) => {
        console.log(`Selected rating: ${rating}`);
        // Implement your filtering logic here
    };

    return (
        <>
            <Breadcrumb title={"Makeup artist list"} />
            <div className="py-8 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex gap-4 md:flex-nowrap flex-wrap flex-col md:flex-row">
                        <div className='w-full md:w-3/12'>
                            {/* search form start */}
                            <div className='border border-gray-200 p-4 rounded-lg shadow-sm'>
                                <div className='mb-6'>
                                    <h4 className="mb-1 font-semibold">Loaction</h4>
                                    <div className="flex items-center border-2 border-gray-200 py-1 bg-gray-100 p-2 rounded-md">
                                        <input
                                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                            type="text"
                                            id="search"
                                            placeholder="Search..."
                                            aria-label="Search"
                                        />
                                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                                    </div>
                                </div>
                                {/* search form end */}


                                {/* Availability */}

                                <div className='mb-6'>
                                    <h4 className="mb-1 font-semibold">Availability</h4>
                                    <div className="relative flex">
                                        <div className="flex items-center my-1">
                                            <input
                                                id="today"
                                                name="comments"
                                                type="checkbox"
                                                checked
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600  accent-[var(--theme)]"
                                            />
                                            <label htmlFor="today" className="ml-3 text-sm font-medium text-gray-900 no-select">Today</label>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-1">
                                        <input
                                            id="tomorrow"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600  accent-[var(--theme)]"
                                        />
                                        <label htmlFor="tomorrow" className="ml-3 text-sm font-medium text-gray-900 no-select">Tomorrow</label>
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <h4 className="mb-1 font-semibold">Price Range</h4>
                                    <div className="relative flex">
                                        <div className="flex my-1 items-center">
                                            <input
                                                id="Below500"
                                                name="comments"
                                                type="checkbox"
                                                checked
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600  accent-[var(--theme)]"
                                            />
                                            <label htmlFor="Below500" className="ml-3 text-sm font-medium text-gray-900 no-select">Below 500</label>
                                        </div>
                                    </div>
                                    <div className="flex my-1 items-center">
                                        <input
                                            id="599-999"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600  accent-[var(--theme)]"
                                        />
                                        <label htmlFor="599-999" className="ml-3 text-sm font-medium text-gray-900 no-select">599-999</label>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className='mb-6'>
                                    <h4 className="mb-2 font-semibold">Ratings And Reviews</h4>
                                    <StarRating onRatingSelect={handleRatingSelect} />
                                </div>


                            </div>
                        </div>
                        <div className='w-full md:w-9/12 flex  md:flex-nowrap sm:flex-warp flex-wrap'>
                           <div className="w-full md:w-4/12 sm:w-6/12 ">
                           <ArtistCard />
                           </div>
                           <div className="w-full md:w-4/12 sm:w-6/12">
                           <ArtistCard />
                           </div>
                           <div className="w-full md:w-4/12 sm:w-6/12">
                           <ArtistCard />
                           </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials />
        </>
    )
}

export default Artists