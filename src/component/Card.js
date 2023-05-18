import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

export const Card = ({product}) => {

  const [isInCart,setIsInCart]=useState(false)
  const {addToCart,removeFromCart,cartList }=useCart()
  const {id,name,price,image}=product

  useEffect(()=>{
    const productIsInCart=cartList.find(cartItem => cartItem.id === id )
    if(productIsInCart){
      setIsInCart(true)
    }else{
      setIsInCart(false)
    }
  },[cartList,id])

 
  return (
    <div className="shadow-lg my-6 mr-6">
      <img  className="box-content h-60 w-70 p-2 " src={image} alt={name} />
      <p className="p-2">{name}</p>
      <div className="flex items-center p-2 justify-between">
        <p>${price}</p>
        {isInCart ? 
        (<button className=" bg-red-600 hover:bg-red-500 text-white rounded p-2 text-white" onClick={()=> removeFromCart(product)}>Remove</button>):
        (<button className="bg-orange-600 hover:bg-orange-500 rounded p-2 text-white" onClick={()=> addToCart(product)}>Add To Cart</button>)}
        
      </div>
    </div>
  )
}

