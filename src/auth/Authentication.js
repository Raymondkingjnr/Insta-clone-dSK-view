import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Singup from "./Singup";
const Authentication = () => {
  const [activeUser, setActiveUser] = useState("false");

  const handleState = () => {
    setActiveUser(!activeUser);
  };
  return (
    <div className="auth">
      <div className="auth_left">
        <img src="https://1.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className="auth_right">
        {activeUser ? <Login /> : <Singup />}
        <div className="auth_more">
          {activeUser ? (
            <span>
              Don't have account ?{" "}
              <button onClick={handleState}>Sign up</button>
            </span>
          ) : (
            <span>
              Already have account ?{" "}
              <button onClick={handleState}> Login</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
