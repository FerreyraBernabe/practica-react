import { useState } from "react";

export function MyForm() {
  const [name, setName] = useState("");

  return (
    <>
      <form>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <p>Nombre: {name}</p>
    </>
  );
}
