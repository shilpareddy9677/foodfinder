import {CartCard} from "../component"
import { useTitle } from "../hook/useTitle"

export const Cart = () => {
  useTitle("cart | FoodFinder")
  const products=[
    {"id":1,"name":"burger","price":120,"image":"/assects/image 2.png"},
    {"id":2,"name":"Vegetables","price":110,"image":"/assects/image 3.png"},
  ]

  return (
    <main>
      <section>
        <h1>Cart Items : {products.length}</h1>
        {products.map((product)=>(
          <CartCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}


