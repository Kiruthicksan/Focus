import React from 'react'
import Header from './components/Header'
import Streak from './components/Streak'
const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen w-full'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Header />
        <Streak />
      </div>
    </div>
  )
}

export default App