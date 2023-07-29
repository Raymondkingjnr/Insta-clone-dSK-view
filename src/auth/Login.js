import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firbase";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, values.email, values.password);
  };

  return (
    <div className="login">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={handleChange}
        value={values.email}
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        value={values.password}
        name="password"
        type="password"
        placeholder="password"
      />
      <button onClick={handleLogin}>log in</button>
    </div>
  );
};

export default Login;
