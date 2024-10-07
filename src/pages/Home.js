
import ProductCard from '../components/ProductCard'
import {Link} from 'react-router-dom'
import { animated , useSpring } from 'react-spring'

const Home = () => {
    const temData = [
        {
          id:1,
          image:"https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
           name:"MacBook",
           price:123 ,
           stock:123,
        },  ]

        const spring = useSpring({
          from: { opacity: 0, y: -10 },
          to: {opacity: 1, y: 1 },
          config: { duration: 1000 },
       })   
          



  return (
    <animated.div className='home  gap-5  ' style={{...spring}}>
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
       
     
    </animated.div>
  )
}

export default Home
