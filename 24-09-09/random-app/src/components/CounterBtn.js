// I'm trying out the counter button state
import React, { useState } from "react"

const CounterBtn = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      You have Clicked Me {count} times!
    </button>
  )
}

export default CounterBtn
