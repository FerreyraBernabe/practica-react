import { useState } from "react";

export function Input({
  label,
  type,
  name,
  value,
  handleChange,
  error,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
      {error != "" && (
        <span
          style={{
            color: "red",
            fontSize: "0.8rem",
            fontStyle: "italic",
          }}
        >
          Error: {error}
        </span>
      )}
    </>
  );
}
