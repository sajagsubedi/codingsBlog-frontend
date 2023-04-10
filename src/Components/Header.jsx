import React, { useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext, BlogContext, ComponentContext } from "../context/index";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  const { setQuery, query, getBlogs, setIsQuery } = useContext(BlogContext);
  const { showAlert } = useContext(ComponentContext);
  const { setUser, defUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const offFunc = () => {
    const navigation = document.getElementById("navigation");
    navigation.classList.remove("active");
    setIsQuery(false);
    window.scrollTo(0, 0);
  };
  const HeaderOff = () => {
    const anchorTags = document.querySelectorAll(".menu li .nav-link");
    let categoryTags = document.querySelectorAll(
      ".menu li .categoryDropDown .nav-link"
    );
    for (let i = 0; i < anchorTags.length; i++) {
      anchorTags[i].addEventListener("click", offFunc);
    }
    categoryTags.forEach((tags) => {
      tags.addEventListener("click", () => {
        document
          .getElementById("categorydropdown")
          .classList.remove("dropdownActive");
      });
    });
  };
  const ToggleMenu = () => {
    const navigation = document.getElementById("navigation");
    navigation.classList.toggle("active");
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setUser(defUser);
    navigate("/");
    showAlert("Logged out successfully", "success");
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
                      useLocation().pathname == "/" ? "activeTxt" : ""
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
                        .getElementById("categorydropdown")
                        .classList.toggle("dropdownActive");
                    }}
                  >
                    Categories <RiArrowDropDownLine />
                  </Link>
                  <div id="categorydropdown" className="categoryDropDown">
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
                          useLocation().pathname == "/profile" ? "activeTxt" : ""
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
                      <Link className="PrimaryButton" to="/login">
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
                <button
                  onClick={async () => {
                    await setIsQuery(true);
                    getBlogs();
                  }}
                  className="SearchButton"
                >
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
