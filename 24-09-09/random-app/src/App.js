import "./App.css"
import Name from "./components/Name"
import Counter from "./components/Counter"
import Show from "./components/Show"
import Context from "./components/Context"
import PropDrilling from "./components/PropDrilling"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)
  return (
    <>
      <Name name={"PeabOss"} />
      <Name />
      <Counter />
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
    </>
  )
}

export default App
