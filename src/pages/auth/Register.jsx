import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/loader";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("passwords do not match");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);

        toast.success("profile successfully created");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);

        // ..
      });
  };
  return (
    <div>

      {isLoading && <Loader />}
      <div className="container">
        <h4 className="text-warning mt-3">Register</h4>
        <div className="login-img mb-5">
          {/* <img src={LoginImg} alt="" className="w-50" /> */}

          <form
            action=""
            onSubmit={registerUser}
            className="form-control py-4 "
          >
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="erjvebk"
              className="form-control w-100 text-white"
              type="email"
              placeholder="example@email.com"
            />
            {/* <br /> */}
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="erjvebk"
              className="form-control w-100 text-white"
              type="password"
              placeholder="password"
            />
            <input
              required
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              label="erjvebk"
              className="form-control w-100"
              type="password"
              placeholder="confirm password"
            />
            <br />
            <button type="submit" className="btn btn-warning w-100 text-white">
              Register
            </button>
            <Link to="/Reset">
              {" "}
              <small className="text-white">Forgot password</small>
            </Link>
            <br />

            <small className="text-white">-- Or --</small>
            <button className="btn btn-danger w-100">Login with Google</button>
            <Link to="/Login">
              {" "}
              <small className="text-white">
                Already have an account?
                <span className="text-danger"> login</span>{" "}
              </small>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
