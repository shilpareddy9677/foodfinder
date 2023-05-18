import { Link,NavLink } from "react-router-dom"
import logo from "../assects/logo.png"

export const Header = () => {

  const activeClass="text-base mx-3 py-2 pr-4 pl-3 text-white bg-orange-500 rounded "
  const inactiveClass="text-base mx-3 py-2 pr-4 pl-3  text-white bg-orange-400 rounded hover:bg-orange"

  return (
      <header className="shadow-lg">
        <nav className="flex flex-wrap items-center justify-between p-4 mx-5">
          <div className="flex ">
            <img src={logo} className="mr-2 h-8 sm:h-9" alt="food" />
            <Link to="/" className="text-xl mt-2 font-semibold whitespace-nowrap">FoodieFinder</Link>
          </div>

          <div>
            <NavLink to="/" className={({isActive})=>isActive ? activeClass:inactiveClass}>Home</NavLink>
            <NavLink to="/likes" className={({isActive})=>isActive ? activeClass:inactiveClass}>Cart</NavLink>
          </div>

          <div>Cart : 2</div>
        </nav>
      </header>
  )
}