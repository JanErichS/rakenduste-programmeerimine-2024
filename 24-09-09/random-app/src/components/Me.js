import React from "react"

const Me = ({ name = "PeaBoss" }) => {
  const hobbies = ["Cooking", "Weightlifting", "Walking", "Building furniture"]

  return (
    <div className="me-main">
      <h1>{name}</h1>
      <CTA />
      <h1>My hobbies are: </h1>
      <ul>
        {hobbies.map(hobby => (
          <li>{hobby}</li>
        ))}
      </ul>
      <ContactForm />
    </div>
  )
}

const CTA = () => {
  return (
    <button
      type="submit"
      className="cta-button"
      onClick={() => alert("You have joined our ...")}
    >
      Join Now!
    </button>
  )
}
const ContactForm = () => {
  return (
    <form>
      <h3>Name</h3>
      <input
        type="text"
        placeholder="Enter your name"
      />

      <h3>Email</h3>
      <input
        type="email"
        placeholder="Enter your email"
      />

      <h3>Message</h3>
      <textarea placeholder="Enter your message"></textarea>
      <br />
      <button
        type="submit"
        onClick={() => alert("Thank you for the message!")}
      >
        Submit
      </button>
    </form>
  )
}

export default Me
