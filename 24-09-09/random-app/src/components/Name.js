const Name = ({ name = "World" }) => {
  return (
    <h1>Hello {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!</h1>
  )
}

export default Name
