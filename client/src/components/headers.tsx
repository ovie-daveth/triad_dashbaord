import React from 'react'
import ToggleTheme from './toggletheme'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='py-2 flex items-center justify-between'>
        <div>
            <h1 className='text-xl lg:text-3xl xl:text-4xl font-bold'>Triad</h1>

        </div>
        <div className='flex items-center xl:gap-24 lg:gap-20 gap-16'>
            <div className='flex items-center gap-7'>
                <Link to="/">Dashboard</Link>
                <Link to="/create">Submissions</Link>
                <Link to="/settings">Settings</Link>
            </div>
            <ToggleTheme />
        </div>
    </div>
  )
}

export default Headers