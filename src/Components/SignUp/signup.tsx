import React from "react"
import './signup.css'
import Logo from '../../assets/image/logo.jpg'
const SignUp = () => {
  
  return (
    
      <div className="container mt-5 mb-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card px-5 py-5">
            <div className="logo">
                <img className="imglogo navbar-brand" src={Logo} alt="logo" />
              </div>
              <h1 className="mt-3">Create Account</h1>
              <div className="form-input">
                <i className="fa fa-envelope"></i>
                <input type="text" className="form-control" placeholder="Email address"/>               
              </div>
              <div className="form-input">
                <i className="fa fa-user"></i>
                <input type="text" className="form-control" placeholder="User name"/>               
              </div>
              <div className="form-input">
                <i className="fa fa-lock"></i>
                <input type="text" className="form-control" placeholder="password"/>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  I agree all the statements
                </label>
              </div>
              <button className="btn btn-primary mt-4 signup">Start coding now</button>
              <div className="text-center mt-3">
                <span>Or continue with these social profile</span>               
              </div>
              <div className="d-flex justify-content-center mt-4">                
                <span className="social"><i className="fa fa-google"></i></span>
                <span className="social"><i className="fa fa-facebook"></i></span>
                <span className="social"><i className="fa fa-twitter"></i></span>
                <span className="social"><i className="fa fa-linkedin"></i></span>
              </div>
              <div className="text-center mt-4">                
                <span>Already a member?</span>
                <a href="#" className="text-decoration-none">Login</a>
              </div>              
            </div>            
          </div>          
        </div>
      </div>
    
  );

}
export default SignUp;