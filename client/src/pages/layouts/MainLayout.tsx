import React from 'react'

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='px-28 py-10'>
        {children}
    </div>
  )
}

export default MainLayout