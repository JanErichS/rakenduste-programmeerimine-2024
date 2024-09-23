import { useState } from "react";

export default function SubmitCat() {
  const [name, setName] = useState("");

  const submitCat = async () => {
    const response = await fetch("http://localhost:3030", {
      method: "POST",
      body: JSON.stringify(name)
    });
  };

  const handleSubmit() => {

  }
  return <form action="submit"></form>;
}
