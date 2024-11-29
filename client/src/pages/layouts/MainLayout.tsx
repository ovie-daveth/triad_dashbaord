import { BreadcrumbWithCustomSeparator } from '@/components/BreadCrumb'
import Headers from '@/components/headers'
import { Navbar } from '@/components/landingpage/Navbar'
import React from 'react'

const MainLayout = ({children}: {children: React.ReactNode}) => {


  return (
    <div className='lg:px-28 lg:py-10 md:px-24 md:py-8 px-5 py-2  '>
        <div className='mb-20'><Navbar /></div>
        <div className='mt-5'><BreadcrumbWithCustomSeparator /></div>
        <div className='mt-10'> {children}</div>
    </div>
  )
}

export default MainLayout