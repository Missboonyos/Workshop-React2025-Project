//rafce
import React from 'react'
import PersonnelList from './components/people/PersonnelList'
import Header from './components/layout/Header'
import MapView from './components/map/MapView'
import LocationList from './components/locations/LocationList'

const App = () => {
  return (
    <div className='flex h-screen bg-green-100'>
      <PersonnelList />
      
      <div className='flex flex-col flex-1'>
        <Header />
        
        <div className='flex flex-1 overflow-hidden'>
          <MapView />
          <LocationList />
        </div>
      </div>

    </div>
  )
}

export default App