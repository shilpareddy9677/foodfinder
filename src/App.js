
import { Header } from "./component"
import {Allrouts} from "./routes/Allrouts"

export const App = () => {
  return (
    <div className=" mx-10 sm:mx-0">
      <Header />
      <Allrouts/>
    </div>
  )
}