import "./App.css";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Speakers from "./components/Speakers";
import SunAnimation from "./components/SunAnimation";
import MainRouter from "./components/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Tooltip } from "bootstrap";
function App() {


  return (
    <>
      <div id="app">
       
        <MainRouter />
   
      </div>
    </>
  );
}

export default App;
