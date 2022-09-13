import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const OrderHistory = () => {
    const [cartData,setCartData] = useState([])

const selector = useSelector((state)=>{
 return state.addressDetails
})
console.log("selector address details",selector)
useEffect(()=>{
  if(selector){
    setCartData(selector)
  }
},[selector])

  return (
    <div>
     {cartData.map((item,index)=>{
      return(
        <>
          <h1>{item.fullName}</h1>
          <h1>{item.title}</h1>
          
        </>
      )
     })}
    </div>
  )
}

export default OrderHistory
