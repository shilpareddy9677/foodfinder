import {CartCard} from "../component"
import { useTitle } from "../hook/useTitle"
import { useCart } from "../context/CartContext"
// import { useContext } from "react"

export const Cart = () => {
  const { total ,cartList}=useCart()
  // const { total }=useContext(CartContext)

  useTitle("cart | FoodFinder")

  // const products=[
  //   {"id":1,"name":"burger","price":120,"image":"/assects/image 2.png"},
  //   {"id":2,"name":"Vegetables","price":110,"image":"/assects/image 3.png"},
  // ]

  return (
    <main>
      <section>
        <h1 className="text-center font-bold">Cart Items : {cartList.length}/${total}</h1>
        {cartList.map((product)=>(
          <CartCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}


