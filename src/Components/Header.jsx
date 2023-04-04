import React, { useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BlogContext } from "../context/index";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  const { setQuery, query, getBlogs } = useContext(BlogContext);
  const navigate = useNavigate();
  const offFunc = () => {
    const navigation = document.getElementById("navigation");
    navigation.classList.remove("active");
  };
  const HeaderOff = () => {
    const anchorTags = document.querySelectorAll(".menu li .nav-link");
    for (let i = 0; i < anchorTags.length; i++) {
      anchorTags[i].addEventListener("click", offFunc);
    }
  };
  const ToggleMenu = () => {
    const navigation = document.getElementById("navigation");
    navigation.classList.toggle("active");
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/");
  };
  useEffect(HeaderOff, []);
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <header className="Header">
      <nav className="Navbar">
        <div id="navigation" className="navigation">
          <div className="phoneVisible">
            <div className="appnameBx">
              <Link to="/" className="appname">
                CODINGSBLOG
              </Link>
            </div>
            <div
              id="menuToggle"
              className="menuToggle"
              onClick={ToggleMenu}
            ></div>
          </div>
          <div className="nav-links">
            <ul className="menu">
              <div className="firstMenuHalf">
                <li>
                  <Link
                    className={` ${
                      useLocation().pathname == "/" ? "active" : ""
                    } nav-link`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("dropdownBtn")
                        .classList.toggle("dropdownActive");
                    }}
                  >
                    Categories <RiArrowDropDownLine />
                  </Link>
                  <div id="dropdownBtn" className="categoryDropDown">
                    <ul>
                      <li>
                        <Link className="nav-link" to="/general">
                          General
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/webdevelopment">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/appdevelopment">
                          App Development
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/cybersecurity">
                          Cyber security
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {localStorage.getItem("token") ? (
                  <>
                    <li>
                      <Link
                        className={` ${
                          useLocation().pathname == "/profile" ? "active" : ""
                        } nav-link`}
                        to="/profile"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        className="PrimaryButton nav-link"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="PrimaryButton active" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="PrimaryButton nav-link" to="/signup">
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </div>
              <div className="secondHalf">
                <input
                  className="SearchInput"
                  value={query}
                  onChange={handleSearchChange}
                  placeholder="Enter text to search"
                />
                <button onClick={() => getBlogs()} className="SearchButton">
                  <AiOutlineSearch />
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
