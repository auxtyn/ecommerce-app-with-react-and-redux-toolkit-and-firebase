import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/loader";
// import Reset from "./Reset";
// import LoginImg from "../../assets/login.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const googleSignIN = () => {
    const provider = new GoogleAuthProvider();
    // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
        toast.success(`welcome ${user.displayName}`);
        navigate("/");
      })

      .catch((error) => {
        // Handle Errors here.
        toast.error(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoading(true);
        toast.success("successfully logged in");
        navigate("/");
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      {isLoading && <Loader />}
      <div className="container">
        <h4 className="text-warning mt-3">Login</h4>
        <div className="login-img mb-5">
          {/* <img src={LoginImg} alt="" className="w-50" /> */}

          <form action="" className="form-control py-2 ">
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
              placeholder="password    "
            />
            <br />
            <button
              type="submit"
              onClick={signIn}
              className="btn btn-warning w-100 text-white"
            >
              Login
            </button>
            <Link to="/Reset">
              {" "}
              <small className="text-white">Forgot password</small>
            </Link>
            <br />

            <Link to="/Register">
              {" "}
              <small className="text-white">
                Don't have an account?{" "}
                <span className="text-danger"> Register</span>
              </small>
            </Link>
          </form>
          <small className="text-white">-- Or --</small>
          <button
            onClick={googleSignIN}
            className="btn btn-danger w-50 form-control"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
