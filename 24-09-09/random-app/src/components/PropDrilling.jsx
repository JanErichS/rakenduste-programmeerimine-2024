import React from "react"
import { useState } from "react"

const PropDrilling = () => {
  const [weather, setWeather] = useState(":sun_with_face:")
  return <Europe weather={weather} />

  const Europe = ({ weather }) => {
    return <Estonia weather={weather} />
  }

  const Estonia = ({ weather }) => {
    return <Tallinn weather={weather} />
  }

  return <Estonia weather={weather} />
  const Tallinn = ({ weather }) => {
    return <div />
  }
}

export default PropDrilling
