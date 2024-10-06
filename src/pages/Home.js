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
        {
          id:5,
          name:"Product 4"
        },
        {
          id:6,
          name:"Product 4"
        },
        {
          id:7,
          name:"Product 4"
        },
        {
          id:8,
          name:"Product 4"
        },
    ]
  return (
    <div className='home  gap-5  '>
       <section></section>
       <div className='flex justify-between items-center w-full'>
        <h1 className='text-4xl'>Latest Products</h1>
        <Link className='text-xl link' to="/search">More</Link>
       </div>
       <div className='w-full flex flex-wrap justify-center items-center gap-4'>
        {temData.map((item)=>(
        <ProductCard item={item} id={item.id}/>
       ))}
       </div>
       
     
    </div>
  )
}

export default Home
