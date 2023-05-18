import React, { useState } from "react"
import './login.css'

const Login = () => {
  // const [modal, setModal] = useState<boolean>(false);
  // const toggleLogin = () => {
  //   setModal(!modal);
  // };
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>User name</label>
            <input
              type="email"
              className="username form-control mt-1"
              placeholder="Username"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="password form-control mt-1"
              placeholder="*******"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className=" forgot-password text-center mt-2">
             <a className="forget-psw" href="#">Forgot password?</a>
          </p>
          <p className=" text-center mt-2">Don't have any account?
             <a className="registration" href="#">Registration</a>
          </p>
        </div>
      </form>
    </div>
  )
}
export default Login;