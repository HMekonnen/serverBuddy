
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

function WaiterLogin({setServer}) {
 const [serverName, setServerName] = useState("");

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    loginName: "",
    loginPassword: "",
  });

  const handleChangeLogin = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  let success = false;
  let waiter = ""


  function isLoggedIn (success) {
    if (success === true) {
      setServer({serverName: waiter});
      navigate("/waiter");
    }
  }

  //Log into Account

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/staff/login", {
        username: loginData.loginName,
        password: loginData.loginPassword
      });
      console.log(response);
      localStorage.setItem("jwtToken", response.data.jwtToken);

      if (response.status === 200) {
        success = true;
        waiter = response.body;
        setServer(waiter);

    
        isLoggedIn(success);
      }
      console.log("success:", success);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Table-Login">
      <h2>Waiter Log in</h2>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="loginName">Name:</label>
        <input name="loginName" id="loginName" onChange={handleChangeLogin} />
        <label htmlFor="loginPassword">Password:</label>
        <input
          type="password"
          name="loginPassword"
          id="loginpassword"
          onChange={handleChangeLogin}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default WaiterLogin;
