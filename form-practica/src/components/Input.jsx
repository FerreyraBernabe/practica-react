
export function Input({
  inputRegister,
  label,
  type = "text",
  errors
}) {
  return (
    <>
      <label htmlFor={inputRegister.name}>{label}</label>
      <input
        id={inputRegister.name}
        type={type}
        {...inputRegister}
      />
      {errors && (
        <span
          style={{
            color: "red",
            fontSize: "0.8rem",
            fontStyle: "italic",
          }}
        >
          <br></br>
          Error: {errors}
          <br></br>
        </span>
      )}
    </>
  );
}
