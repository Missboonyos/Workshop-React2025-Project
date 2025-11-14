//rafce
import React, { useEffect } from 'react'
import PersonnelList from './components/people/PersonnelList'
import Header from './components/layout/Header'
import MapView from './components/map/MapView'
import LocationList from './components/locations/LocationList'
import axios from 'axios'
import useDutyStore from './store/useDutyStore'

const App = () => {
  // JS

  // This is to get into global state: access to everything pattern
  const fetchAll = useDutyStore((state) => state.fetchAll)

  // useEffect is used when we want functions run automatically
  // useEffect needs 2 things; arrow fn & dependency (empty array)
  useEffect(()=>{ 
    //function body
    fetchAll()
  }, [])





//-------------------------------
  // create this function: fetchAll (it's promise; need async-await) and will be called to use in useEffect above
  // this coding pattern without try..catch can function but it's difficult to handle the error, ie, wrong endpoint with error 404 not found
  // const fetchAll = async()=> {
  //   //function body
  //   const res = await axios.get('http://localhost:3000/personnel')

  //   console.log(res)
  //   console.log(res.data)
  // }

//-------------------------------
  // using try...catch
  // const fetchAll = async()=> {
    //function body
    // try {
    //   const res = await axios.get('http://localhost:3000/personnel')

      // console.log(res)
      // console.log(res.data) //the result we get here will be kept in useEffect

    // } catch (error) {
    //   console.log("Rabbit on the moon", error)
      //console.log result & AxiosError msg will be displayed when the errors occur.
      // console.log(error.response.data) //This is to get the msg "Not Found". Then, we'll display it on Modal
  //   }
  // }
//-------------------------------

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