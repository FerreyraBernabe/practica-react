import { useState } from "react";
import { Input } from "./Input";
import "./Form.css";

export function Form() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");

  const handleUserChange = (e) => {
    const value = e.target.value;
    setUser(value);

    if (value && value.length < 5) {
      setUserError(
        "El nombre de usuario debe tener al menos 5 caracteres.",
      );
    } else setUserError("");
  };

  const handlePassChange = (e) => {
    const value = e.target.value;
    setPass(value);

    if (value && value.length < 8) {
      setPassError(
        "La contraseña debe tener al menos 8 caracteres.",
      );
    } else setPassError("");
  };

  return (
    <div className='form-wrapper'>
      <form>
        <fieldset>
          <legend>Login</legend>
          <section className='input-section'>
            <Input
              label='Nombre de Usuario:'
              type='text'
              name='name'
              value={user}
              handleChange={handleUserChange}
              error={userError}
            />
            <Input
              label='Contraseña:'
              type='password'
              name='pass'
              value={pass}
              handleChange={handlePassChange}
              error={passError}
            />
          </section>
        </fieldset>
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
}
