
import { Goal } from 'lucide-react'
const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 pt-12 gap-4'>
      <div className="space-y-1">
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>Focus</h1>
        <p className='text-gray-500 text-xs md:text-sm max-w-[250px] sm:max-w-none leading-tight'>
          Need to track your study Hours, <span className='text-blue-500 font-semibold'>Focus</span> is the best tool for you
        </p>
      </div>
      <div className="shrink-0">
        <button className='flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded-2xl cursor-pointer font-medium shadow-md shadow-blue-100'>
          <Goal className='w-4 h-4' />
          Goals
        </button>
      </div>
    </header>
  )
}

export default Header