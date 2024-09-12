import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const modifyCounter = (counter = 1) =>
    setCount(pervCount => pervCount + counter)

  return (
    <>
      <h1>{count}</h1>
      {[+1, +5, +50, -1, -5, -50].map(element => {
        return (
          <button onClick={() => modifyCounter(element)}>
            Click Me! {element}
          </button>
        )
      })}
      {/* <button onClick={() => modifyCounter()}>Click Me!</button>
      <button onClick={() => setTimeout(() => modifyCounter(), 1000)}>
        Click Me Async!
      </button> */}
    </>
  )
}

export default Counter
