import React, { useState } from 'react'
import Filter from './Filter'
import CategoryCards from './CategoryCards'

function DetailPage() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([])

  return (
    <div className='bg-[#f2f2f2]'>
      <div className='flex container mx-auto justify-between py-[300px] items-start gap-[30px] px-[10px]'>
        <Filter data={data} setFilter={setFilter}/>
        <CategoryCards filter={filter} setData={setData} />
      </div>
    </div>

  )
}

export default DetailPage