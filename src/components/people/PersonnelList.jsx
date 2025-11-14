//rafce
import React from 'react'
import useDutyStore from '../../store/useDutyStore'

const PersonnelList = () => {
  //Zustand
  //Selecting multiple state slices
  const personnel = useDutyStore((state)=>state.personnel)
  console.log(personnel)
  
  // console.log(clover.rabbit)
  // clover.rabbit()
 

  return (
    <div className='w-80 bg-white overflow-y-auto'>
      PersonnelList
    </div>
  )
}

export default PersonnelList