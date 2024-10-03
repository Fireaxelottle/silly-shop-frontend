import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='w-1/5 shadow-2xl hover:cursor-pointer hover:scale-105 hover:shadow-xl  p-2  flex flex-col  items-center rounded-md relative'>
      <img className='w-[100%] h-[80%] rounded-md' src="https://picsum.photos/200/300" alt="Electronics item" />  
      <h1 className='text-2xl my-auto'>{item.name}</h1>   
    </div>
  )
}

export default ProductCard
