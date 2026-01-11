import React from 'react'
import Header from './components/Header'
import Streak from './components/Streak'
import Progress from './components/Progress'
import WeekTracker from './components/WeekTracker'
const App = () => {
  return (
    <div className='bg-gray-100 min-h-screen w-full'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Header />
        <Streak />
        <Progress />
        <WeekTracker />
      </div>
    </div>
  )
}

export default App