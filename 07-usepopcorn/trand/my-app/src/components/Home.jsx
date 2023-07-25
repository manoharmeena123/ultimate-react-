import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./Footer";
import Learn from "./Learn";
import Speakers from "./Speakers";
import SunAnimation from "./SunAnimation";
import axios from "axios";
import About from "./About";
import Speak from "./Speak";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Tooltip } from "bootstrap";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openPop = () => {
    setIsOpen(true);
  };

  const closePop = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Fill all credentials");
      return;
    }
    let obj = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/user/sign", obj)
      .then((res) => {
        console.log(res);
        setIsOpen(false);

        //sweetPop
        Swal.fire({
          title: res.data,
          text: "You have Signed upSuccessfully",
          icon: "success",
          position: "top-end", // Position the popup in the top right corner
          toast: true, // Display it as a toast notification
          showConfirmButton: false, // Hide the confirm button
          timer: 3000, // Automatically close after 3 seconds
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container bg-black">
        {/* <div className="row" id="navbar">
          <div className="col-md-6 float-left">
            <div className="logo">
              <h1>Buzzthrough</h1>
            </div>
          </div>
          <div
            id="list"
            className="col-md-6 float-right d-flex  pt-3 align-content-center"
            style={{ listStyleType: "none" }}
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
            </li>
            <Link to='/cards'>Cards</Link>
            <li></li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li className="text-blue">
              Log
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </li>
            <button
              type="button"
              className="btn btn-primary"
              id="registerbtn"
              onClick={openPop}
            >
              Register Now
            </button>
          </div>
        </div> */}
   <Navbar openPop={openPop}/>
        <div className="container pt-5">
          <div className="row font-size-large">
            <div className="col-12">
              <h1 className="display-1 font-weight-bolder">The Future of</h1>
              <h1 className="display-1 font-weight-bolder">
                Digital Marketing
              </h1>
            </div>
          </div>
          <div className="col-12 pt-5">
            <h4>Trend and Forecast</h4>
            <h4>for 2035 and Beyond</h4>
          </div>
          <div className="col-12 pt-5">
            <button className="btn btn-primary">Register Now</button>
          </div>
        </div>

        <SunAnimation />

        <div className="container pt-5 bg-black">
          <div className="row bg-black">
            <div className=" col-4 offset-1 relative bg-black">
              <img
                width="300px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgvJbjVmragsjtXcytft5I3CGVeI-72UkwQ&usqp=CAU"
                alt="First Image"
              />
              <div className="col-4 offset-2 absolute bg-black">
                <img
                  width="300px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgvJbjVmragsjtXcytft5I3CGVeI-72UkwQ&usqp=CAU"
                  alt="First Image"
                />
              </div>
              <div className="col-4 offset-12 absolute pt-3 bg-black">
                Redundant alt attribute. Screen-readers already announce `img`
                tags as an image. You don’t need to use the words `image`,
                `photo,` or `picture` (or any specified custom words) in the alt
                prop
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="form-overlay">
            <div className="form">
              <button className="form-close" onClick={closePop}>
                &times;
              </button>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                id="myButton"
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className="row">
              <div className="col-6 text-black">
                already have an account ? <a href="#">Login here</a>
              </div>
            </div>
          </div>
        )}
      </div>

      <Speakers />
      <Learn />
      <Footer />
    </div>
  );
}
