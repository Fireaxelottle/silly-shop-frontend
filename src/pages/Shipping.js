import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    code: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setShippingInfo({ ...shippingInfo, [name]: value })
  }
  return (
    <div className='p-28 shipping '>
      <Link to="/cart" className='link text-white rounded-md hover:scale-75 hover:shadow-xl  p-4' ><i class="fa-solid fa-arrow-left"></i></Link>
      
      <form className='flex justify-center items-center flex-col gap-8 mx-auto'>
        <h1 className='text-4xl'>Shipping</h1>
        <input
          required
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={handleChange}
        />
        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="pakistan">Pakistan</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="bangladesh">Bangladesh</option>
        </select>

        <input
          required
          type="number"
          name="pinCode"
          placeholder="Pin Code"
          value={shippingInfo.pinCode}
          onChange={handleChange}
        />

        <button type="submit">Continue</button>
      </form>
    </div>
  )
}

export default Shipping
