import { useState } from "react";
import { validar } from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [property]: value,
    });

    setErrors(
      validar({
        ...userData,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    if (
      userData.email &&
      userData.password &&
      !errors.email &&
      !errors.password
    ) {
      event.preventDefault();
      login(userData, setUserData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button
          type="submit"
          disabled={
            !userData.email ||
            !userData.password ||
            errors.email ||
            errors.password
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
