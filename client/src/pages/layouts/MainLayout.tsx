import { BreadcrumbWithCustomSeparator } from '@/components/BreadCrumb'
import { Navbar } from '@/components/landingpage/Navbar'
import React from 'react'

const MainLayout = ({children}: {children: React.ReactNode}) => {


  return (
    <div className='lg:px-28 lg:py-10 md:px-16 md:py-8 px-5 py-2  '>
        <div className='mb-10'><Navbar /></div>
        <div className='mt-1'><BreadcrumbWithCustomSeparator /></div>
        <div className='mt-10'> {children}</div>
    </div>
  )
}

export default MainLayout