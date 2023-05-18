

export const Card = ({product}) => {

  const {id,name,price,image}=product

  return (
    <div className="shadow-lg my-6 mr-6">
      <img  className="box-content h-60 w-70 p-2" src={image} alt={name} />
      <p className="p-2">{name}</p>
      <div className="flex items-center p-2 justify-between">
        <p>${price}</p>
        <button className="bg-orange-600 hover:bg-orange-500 rounded p-2 text-white ">Add To Cart</button>
      </div>
    </div>
  )
}

