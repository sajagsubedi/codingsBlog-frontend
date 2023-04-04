import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/index";
import { FormSection } from "../../styles/CommonStyles";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //function to handle change in formdata
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //function to  handleSubmit and signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await signup(formData);
    if (resp) {
      navigate("/");
    }
  };
  return (
    <FormSection>
      <h1 className="mainText sm">Signup</h1>
      <form className="globalForm">
        <div className="inputDiv">
          <label
            htmlFor="
      name"
          >
            Name
          </label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className="PrimaryInput"
            minLength={5}
            required
          />
        </div>

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
            type="text"
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
          disabled={formData.name<5||formData.password.length < 5 || formData.email < 5}
          onClick={handleSubmit}
          className="PrimaryButton"
        >
          Signup
        </button>
      </form>
      <div className="formBelowBox">
        <p>
          Already have a account?<Link to="/login"> Login</Link>
        </p>
      </div>
    </FormSection>
  );
};
export default Signup;
