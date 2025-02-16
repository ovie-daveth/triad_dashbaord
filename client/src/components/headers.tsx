import ToggleTheme from './toggletheme'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='py-2 flex items-center justify-between fixed top-3 left-0 right-0 px-5 bg-primary-foreground'>
        <div>
            <Link to="/" className='text-xl lg:text-3xl xl:text-4xl font-bold'>Triad</Link>

        </div>
        <div className='flex items-center xl:gap-24 lg:gap-20 gap-16'>
            <div className='flex items-center gap-7'>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/submissions">Submissions</Link>
                <Link to="/settings">Settings</Link>
            </div>
            <ToggleTheme />
        </div>
    </div>
  )
}

export default Headers