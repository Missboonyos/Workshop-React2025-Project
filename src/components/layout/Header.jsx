//rafce
import { Plus, X } from 'lucide-react'
import React from 'react'

const Header = ( {adding, setAdding} ) => {
  // JS
  // console.log(adding)
  return (
    <div 
      className='p-4 bg-white shadow-md 
          border-b border-gray-200'
    >
      <div className='flex justify-between'>
        <h2 className='text-2xl font- text-gray-700'>
          ระบบจัดการเวรประจำจุด
        </h2>

        <button 
        onClick={ () => setAdding((prev) => !prev)}
        className={`flex items-center gap-2 p-2 rounded-md
          ${
            adding
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-green-500 text-white hover:bg-green-600"
          }
          `}
        >

          {
            adding
            ? ( <> <X size={20}/>ยกเลิก</> )
            : ( <> <Plus size={20}/>เพิ่มจุดเวร</>  )
          }      
        </button>
      </div>

          {
            adding && 
            <div className='mt-2 text-sm text-blue-600
             bg-yellow-100 p-4 rounded-lg border'
             >
            คลิกบนแผนที่เพื่อเพิ่มตำแหน่งเข้าเวร
          </div>
          }          

    </div>
  )
}

export default Header


         {/* onClick={()=>setAdding(!adding)} Normally, we'll set hdlOnclick above but this time, we code here bcos this button has only 1 function & !adding This is not the best practice cos when click many times, the value might not be changed from fault to true.  */}

         {/* onClick={()=>setAdding((prev)=>!prev)} is this the best practice. It means that state:prev will always be the current updated state */}
      

  