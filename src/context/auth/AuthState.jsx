import { useState, useContext } from "react";
import { GlobalContext, AuthContext } from "../index";

export default function AuthState(props) {
  const { host } = useContext(GlobalContext);

  //function to login
  const login = async (data) => {
    let response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    response = await response.json();
    if (!response.success) {
      alert("Please Enter correct credentials ");
      return false;
    }
    localStorage.setItem("token", response.authToken);
    if (response.type == "admin") {
      localStorage.setItem("isAdmin", true);
    }
    return true;
  };

  //function to signup
  const signup = async (data) => {
    let response = await fetch(`${host}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    response = await response.json();
    if (!response.success) {
      return false;
    }
    localStorage.setItem("token", response.authToken);
    return true;
  };

  return (
    <AuthContext.Provider value={{ login, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
}
