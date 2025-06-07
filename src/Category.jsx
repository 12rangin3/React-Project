import React from 'react'

export default function Category({ finalCategory,setCatename }) {

  let cat = Array.isArray(finalCategory) ? finalCategory.map((v,i)=>{
    return(
      <li onClick={()=>setCatename(v)} key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>{v}</li>

    )
  }) : [];
  return (
    <div>
      <h3 className='text-[25px] font-[500] peer-[10px]'>Product Category</h3>
      <ul>
        {cat}
      </ul>
    </div>
  )
}
