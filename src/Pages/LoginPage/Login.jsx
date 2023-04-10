import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/index";
import { FormSection } from "../../styles/CommonStyles";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  //function to handle change in formdata
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //function to  handleSubmit and login
  const handleSubmit = async (e) => {
    e.preventDefault();
    let resp = await login(formData);
    if (resp) {
      navigate("/");
    }
  };
  return (
    <FormSection>
      <h1 className="mainText sm">Login</h1>
      <form className="globalForm">
        <div className="inputDiv">
          <label
            htmlFor="
      email"
          >
            Email
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Your email"
            name="email"
            className="PrimaryInput"
            minLength={5}
            required
          />
        </div>
        <div className="inputDiv">
          <label
            htmlFor="
      password"
          >
            Password
          </label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Your password"
            name="password"
            className="PrimaryInput"
            minLength={5}
            required
          />
        </div>
        <button
          disabled={formData.password.length < 5 || formData.email < 5}
          onClick={handleSubmit}
          className="PrimaryButton"
        >
          Login
        </button>
      </form>
      <div className="formBelowBox">
        <p>
          Don't have a account?<Link to="/signup"> Signup</Link>
        </p>
      </div>
    </FormSection>
  );
};
export default Login;
