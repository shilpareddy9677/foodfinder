import {Routes ,Route} from "react-router-dom"
import {Home,Cart} from "../pages"

export const Allrouts = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/likes" element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

