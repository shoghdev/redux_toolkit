import "./App.css"
import { Counter } from "./features/counter/Counter"
import { AddMedicine } from "./features/medicines/addmedicine"
import { Filter } from "./features/medicines/filter"
import { Medicines } from "./features/medicines/medicines-list"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <Filter />
      <Medicines />
    </div>
  )
}

export default App
