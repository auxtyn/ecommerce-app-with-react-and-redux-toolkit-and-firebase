import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate()

  const [userName, setuserName] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setuserName(user.displayName);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);


  const signout = () => {
    signOut(auth)
      .then(() => {
        toast.success("signout successful");
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        // An error happened.
      });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-dark py-3">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            e<span className="text-warning">Wears</span>.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link to="/Login" className="text-white navigation nav-link">
                Login
              </Link>
              <Link to="/Register" className="text-white navigation nav-link">
                {userName}
              </Link>{" "}
              <Link href="#deets" className="text-white navigation nav-link">
                My orders
              </Link>
              <Link href="contact" className="text-white navigation nav-link">
                Contact us
              </Link>
              <Link
                href="cart"
                className="text-warning navigation nav-link cart"
              >
                Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart4 mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>{" "}
                <span className="span-svg px-1">0</span>
              </Link>
              <div className="text-center form-search ">
                <form action="">
                  <div className="form-surround ">
                    <div className="svg-surround">
                      <svg
                        className="mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="text-white"
                          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        ></path>
                      </svg>
                    </div>
                    <div className="input-surround">
                      <input
                        type="text"
                        placeholder="      search gadgets"
                        className="form-control text-white"
                      />
                    </div>
                    {/* <button className="btn btn-outline-danger flex-right">send</button> */}
                  </div>
                </form>
              </div>
              <Link
                onClick={signout}
                className="text-white navigation nav-link"
              >
                Logout
              </Link>
              {/* </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
