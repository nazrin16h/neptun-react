import React, { useState } from 'react'
import Filter from './Filter'
import CategoryCards from './CategoryCards'
import { IoIosMenu } from "react-icons/io"

function DetailPage() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-[#f2f2f2] min-h-screen'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-start gap-[30px] px-[10px] py-[40px]'>

        <button
          onClick={() => setIsOpen(true)}
          className='lg:hidden text-[30px] text-[#ff8300] mb-4 pt-10'
        >
          <IoIosMenu />
        </button>

        <div
          className={`fixed top-0 left-0 h-full z-50 lg:bg-transparent  bg-white transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:relative lg:translate-x-0 `}
        >
          <div className='flex justify-end p-4 lg:hidden bg-white'>
            <button onClick={() => setIsOpen(false)} className='text-[34px] font-bold text-red-900'>×</button>
          </div>

          <div className='h-full overflow-y-auto p-4'>
            <Filter data={data} setFilter={setFilter} />
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div className='w-full lg:w-[76%] '>
          <CategoryCards filter={filter} setData={setData} />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
