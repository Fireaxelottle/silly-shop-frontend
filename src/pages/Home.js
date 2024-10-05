import React from 'react'
import ProductCard from '../components/ProductCard'
import {Link} from 'react-router-dom'

const Home = () => {
    const temData = [
        {
          id:1,
          name:"Product 1"
        },
        {
          id:2,
          name:"Product 2"
        },
        {
          id:3,
          name:"Product 3"
        },
        {
          id:4,
          name:"Product 4"
        },
    ]
  return (
    <div className='home flex flex-col gap-5 items-center px-[10%] py-6'>
       <section></section>
       <div className='flex justify-between items-center w-full'>
        <h1 className='text-4xl'>Latest Products</h1>
        <Link className='text-xl link' to="/search">More</Link>
       </div>
       <div className='w-full flex flex-wrap justify-center gap-5'>
        {temData.map((item)=>(
        <ProductCard item={item} id={item.id}/>
       ))}
       </div>
       
     
    </div>
  )
}

export default Home
