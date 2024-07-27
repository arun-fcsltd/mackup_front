// pages/about.js

import Link from 'next/link'
import Breadcrumb from '@/components/breadcrumb'


export default function About() {
  return (
    <>
       <Breadcrumb title={"About Us"} />
     <div className='container mx-auto px-4'>
       <div className='py-8 md:py-12 text-center'>
       <Link href="/" className='px-4 py-2 bg-[#A28075] text-white'>Home</Link>
       </div>
      </div>
    </>
  )
}
