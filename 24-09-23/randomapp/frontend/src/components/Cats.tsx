import { useEffect, useState } from "react";

export default function Cats() {
  const [cats, setCats] = useState<Cat[]>([]);

  type Cat = {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
  };

  useEffect(() => {
    const fetchCats = async () => {
      const res = await fetch("http//:localhost:3033/cats");
      const data = await res.json();
      setCats(data);
    };

    fetchCats();
  }, []);

  return (
    <>
      <h1>Cats</h1>
      <ul>
        {cats.map((cat) => (
          <li>{JSON.stringify(cat)}</li>
        ))}
      </ul>
    </>
  );
}
