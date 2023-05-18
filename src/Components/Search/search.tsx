import "./search.css";

const Search = () => {
  return (
    <div >
      <div className="sm-screen-search">
        <div className="form-group has-search sm-screen">
          {/* <span className=" form-control-feedback"> </span> */}
          {/* <i className=" fa-solid fa-magnifying-glass"></i> */}
          <input type="text" className=" form-control" placeholder="Search"/> 
        </div>
      </div>
      
      <div className="lg-screen-search">
        <div className="searchBox">
          <input type="text" className="searchText" placeholder="Search " />
          <a href="#" className="searchBtn">
            <i className="fa-solid fa-magnifying-glass "></i>
          </a>
        </div >
      </div>
      

        
    </div>

    

  );
};

export default Search;
