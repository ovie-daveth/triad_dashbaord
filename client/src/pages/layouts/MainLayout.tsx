import { BreadcrumbWithCustomSeparator } from '@/components/BreadCrumb'
import Headers from '@/components/headers'
import React from 'react'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='px-28 py-10 '>
        <div><Headers /></div>
        <div className='mt-5'><BreadcrumbWithCustomSeparator /></div>
        <div className='mt-10'> {children}</div>
    </div>
  )
}

export default MainLayout