import { useState, useContext } from "react";
import { GlobalContext, AuthContext, ComponentContext } from "../index";

export default function AuthState(props) {
  const { host } = useContext(GlobalContext);
  const { showAlert } = useContext(ComponentContext);
  const defUser = { name: "", email: "" };
  const [user, setUser] = useState(defUser);
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
      showAlert("Please enter correct cedentials", "Error");
      return false;
    }
    localStorage.setItem("token", response.authToken);
    if (response.type == "admin") {
      localStorage.setItem("isAdmin", true);
    }
    showAlert("Logged in succesfully", "success");
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
      showAlert("Please enter correct cedentials", "Error");
      return false;
    }
    localStorage.setItem("token", response.authToken);
    showAlert("Created a new user successfully", "success");
    return true;
  };

  // functionto fetch user profile
  const fetchProfile = async () => {
    let response = await fetch(`${host}/api/auth/fetchuser`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        auth_token: localStorage.getItem("token"),
      },
    });
    response = await response.json();
    if (!response.success) {
      return false;
    }
    setUser(response.user[0]);
  };

  return (
    <AuthContext.Provider
      value={{ login, signup, user, setUser, defUser, fetchProfile }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
