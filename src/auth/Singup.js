import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firbase";

//  .then(
//     signInWithEmailAndPassword(auth, values.email, values.password).then(
//         updateProfile(auth.currentUser, { displayName: values.name })
//       )
//     )
//     .catch((err) => {
//       alert(err);
//     });

const initialState = {
  name: "",
  email: "",
  password: "",
};
const Singup = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    if (!values.email & !values.password & values.name) {
      alert("Please Fill All Input Field");
      return;
    }
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: values.name });
      })
      .then(() => {
        alert("User created and profile updated.");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signup">
      {" "}
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="username"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={handleSignUp}>sign up</button>
    </div>
  );
};

export default Singup;
