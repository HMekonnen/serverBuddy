import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

function TableLogin({ setUser }) {
  const [tableNo, setTableNo] = useState("");

  const navigate = useNavigate();

  const [loginData, setloginData] = useState({
    loginName: "",
    loginPassword: "",
  });

  const handleChangeLogin = (event) => {
    setloginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  let success = false;
  let table = 0;

  function isLoggedIn(success) {
    if (success === true) {
      setUser(`Table ${tableNo}}`);
      console.log("table:", table);
      navigate("/table");
    }
  }

  //Log into Account

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/table/login", {
        username: loginData.loginName,
        password: loginData.loginPassword,
        name: loginData.name,
        tableNo: loginData.tableNo,
        orders: loginData.orders,
      });
      console.log(response);
      localStorage.setItem("jwtToken", response.data.jwtToken);

      if (response.status === 200) {
        success = true;
        table = response.body;
        setTableNo(table);

        console.log({ table });

        isLoggedIn(success);
      }
      console.log("success:", success);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Table-Login">
      <h2> Table Log in</h2>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="loginName">Table No:</label>
        <input name="loginName" id="loginName" onChange={handleChangeLogin} />
        <label htmlFor="loginPassword">Confirm Table No:</label>
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

export default TableLogin;
