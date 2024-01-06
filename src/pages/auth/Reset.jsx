import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

const Reset = () => {
  const [email, setEmail] = useState("");
  const resetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Sent to email ");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div>
        <div className="container">
          <h4 className="text-warning mt-3">Reset password</h4>
          <div className="login-img mb-5">
            <form action="" className="form-control py-2 ">
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="erjvebk"
                className="form-control w-100 text-white"
                type="email"
                placeholder="Enter your email"
              />
              {/* <br /> */}
              <br />
              <button
                onClick={resetPassword}
                className="btn btn-warning w-100 text-white"
              >
                Reset password
              </button>
              <Link to="/Reset">
                {" "}
                <small className="text-white">Forgot password</small>
              </Link>
              <br />

              {/* <small className="text-white">-- Or --</small>
              <button className="btn btn-danger w-100">
                Login with Google
              </button> */}
              <Link to="/Register">
                {" "}
                <small className="text-white">
                  Don't have an account?{" "}
                  <span className="text-danger"> Register</span>
                </small>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
