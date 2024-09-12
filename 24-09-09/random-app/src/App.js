import "./App.css"
import Name from "./components/Name"
import Counter from "./components/Counter"
import Show from "./components/Show"
import Context from "./components/Context"
import PropDrilling from "./components/PropDrilling"
import { useState } from "react"
import CounterBtn from "./components/CounterBtn"
import Me from "./components/Me"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)
  return (
    <>
      <Name name={"PeabOss"} />
      <Name />
      <Me name="Jan-Erich" />
      <Counter />
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      Each of The buttons gets its own state. <br />
      <CounterBtn />
      <CounterBtn />
    </>
  )
}

export default App
