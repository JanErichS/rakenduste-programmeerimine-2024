import React from "react"

const Show = ({ show, toggleShow }) => {
  return (
    <>
      <h1>Show</h1>
      {show ? <p>Showing</p> : <p>Not Showing</p>}
      <button onClick={() => toggleShow}>Toggle Show</button>
    </>
  )
}
export default Show
