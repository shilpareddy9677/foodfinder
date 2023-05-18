

export const CartCard = ({product}) => {
    const {id,name,price,image}=product

  return (
    <div className="flex  shadow-lg p-4 my-5 justify-between items-center   border-b-2  border-gray-300">
      <img className="h-10 w-10" src={image} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      <button className="p-2 bg-red-600 text-white rounded ">Remove</button>
    </div>
  )
}

