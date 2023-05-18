import { Card } from "../component"
import { useTitle } from "../hook/useTitle"

export const Home = () => {
  useTitle("FoodFinder")
  const products=[
    {"id":1,"name":"burger","price":120,"image":"/assects/image 2.png"},
    {"id":2,"name":"Vegetables","price":110,"image":"/assects/image 3.png"},
    {"id":3,"name":"Fruit with Oats","price":111,"image":"/assects/image 4.png"},
    {"id":4,"name":"Fried Rice","price":122,"image":"/assects/image 5.png"},
    {"id":5,"name":"Fruits","price":160,"image":"/assects/image 14.png"},
    {"id":6,"name":"Veg Salad","price":140,"image":"/assects/image 49.png"},
    {"id":7,"name":"Butterfly Pasta","price":145,"image":"/assects/image 64.png"},
    {"id":8,"name":"Dry Fruits","price":150,"image":"/assects/image 65.png"},
    {"id":9,"name":"General Pasta","price":180,"image":"/assects/image 66.png"},
    {"id":10,"name":"Strawberry","price":128,"image":"/assects/image 67.png"},
  ]

  return (
    <main>
      <section className="flex flex-wrap ">
        {products.map((product)=>(
          <Card  key={product.id} product={product}/>
        )) }
      </section>
    </main>
  )
}

