import "./homeContent.css";
import Search from "../Search/search";
import Login from "../Login/login";

const HomeContent = () => {
  return (
    <div className="nav-container">
      <div className=" sm-screen-search ">
        <Search />
      </div>

      <div className="body-content  ">
        <div className="fyd">
          <p>Find Your Dream Home</p>
        </div>
        <div className="paragraph">
          <p>
            We are recognized for exceeding client expectations and delivering
            great results through dedication, ease of process, and extraordinary
            services to our worldwide clients.
          </p>
        </div>
        <div className="log-button">
          <div className="nav-button">
            <button
              onClick={Login}
              type="button"
              className="login btn1 btn-lg d-lg-none"
            >
              Login
            </button>
          </div>
          <div className="nav-button">
            <button
              onClick={Login}
              type="button"
              className="btn2 btn-lg d-lg-none"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
