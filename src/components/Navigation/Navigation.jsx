import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import BaseUrl from "../../const";
import { IoIosNotifications } from "react-icons/io";

const Navigation = () => {
  const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
  const [collapsed, setCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const logout = async (e) => {
    e.preventDefault();
    setCollapsed(true);
    try {
      await fetch(`${BaseUrl}/api/user/logout`, {
        method: "POST",
        // credentials: "include",
      });
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const login = () => {
    setCollapsed(true);
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 170) {
        navbar.classList.add("is-sticky");
        window.history.pushState("", document.title, window.location.pathname);
      } else {
        navbar.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

  return (
    <header id="header" className="header-area">
      <div id="navbar" className="elkevent-nav" style={{ background: "#1b1a1a87" }}>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link exact="true" to="/" onClick={toggleNavbar} className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" onClick={toggleNavbar} className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/teams" className="nav-link" onClick={toggleNavbar}>
                    Our Team
                  </Link>
                </li>

                <li className="nav-item">
                  <NavLink to="/events" className="nav-link" onClick={toggleNavbar}>
                    Events
                  </NavLink>
                </li>

                {/* <li className="nav-item">
                  <NavLink to="/guestlecture" className="nav-link" onClick={toggleNavbar}>
                    Our Speakers
                  </NavLink>
                </li> */}

                {/* <li className="nav-item">
                  <NavLink to="/sponsors" className="nav-link" onClick={toggleNavbar}>
                    Sponsors
                  </NavLink>
                </li> */}

                {/* <li className="nav-item">
                  <NavLink to="/contactus" className="nav-link" onClick={toggleNavbar}>
                    Contact Us
                  </NavLink>
                </li> */}

                <li className="nav-item">
                  {userData ? (
                   <Link  className="nav-link" onClick={logout}>
                    Logout
                  </Link>
                  ) : (
                    <NavLink to="/login" className="nav-link" onClick={login}>
                      Login
                    </NavLink>
                  )}
                </li>

                <li className="nav-item">
                  {userData ? (
                    <NavLink to="/profile" className="nav-link" onClick={toggleNavbar}>
                      Profile
                    </NavLink>
                  ) : (
                    <NavLink to="/signup" className="nav-link" onClick={toggleNavbar}>
                      SignUp
                    </NavLink>
                  )}
                </li>

                <li className="nav-item">
                  {userData &&
                    <NavLink to="/accommodation" className="nav-link" onClick={toggleNavbar}>
                      Accommodation
                    </NavLink>
                }
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
