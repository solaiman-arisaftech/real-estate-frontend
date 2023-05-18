import "./nav.css";
import Logo from "../../assets/image/logo.jpg";
import Search from "../Search/search";
import Login from "../Login/login";
import HomeContent from "../Home Content/homeContent";
import { useState } from "react";
import SignUp from "../SignUp/signup";

const NavBar = () => {
  const [modal, setModal] = useState<boolean>(false);
  const toggleLogin = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="nav-container bg-dark">
        <div className="child1 nav-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container ">
              <div className="logo">
                <img className="imglogo navbar-brand" src={Logo} alt="logo" />
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active menu-home"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link nav-menu-text" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link nav-menu-text" href="#">
                      Service
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link nav-menu-text" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-menu-text" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="d-none d-lg-block lg-screen-search">
                  <Search />
                </div>
                <div className="nav-button ">
                  <button
                    onClick={toggleLogin}
                    type="button"
                    className="login active btn-lg d-none d-lg-block"
                  >
                    Login
                  </button>
                </div>
                <div className="nav-button">
                  <button
                    onClick={SignUp}
                    type="button"
                    className="btn btn-lg d-none d-lg-block"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <HomeContent />
        </div>
      </div>

      {modal && (<Login />)}
    </>
  );
};

export default NavBar;
