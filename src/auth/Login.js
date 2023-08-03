import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firbase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const user = useSelector((state) => state.data.user.user);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("homePage");
      }, 2000);
    }
  }, [user]);

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
