import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
const Cards = () => {
  const [movie, setMovies] = useState("");
  const [movieData, setMoviesData] = useState([]);
  const [selectType, setSelectType] = useState("");
  const [sortType, setSortType] = useState("");
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    Searchhandle();
  }, []);

  const Searchhandle = (movie) => {
    axios
      .get(`http://localhost:8000/member/search/${movie}`)
      .then((res) => {
        setMoviesData(res.data);
        setMovies("");
      })
      .catch((error) => {
        console.log(error);
        setMoviesData([]);
      });

    axios
      .get(`http://localhost:8000/member/get/`)
      .then((res) => setMoviesData(res.data))
      .catch((error) => {
        console.log("Error fetching data:", error);
        setMoviesData([]);
      });
  };

  const handleInput = (e) => {
    setMovies(e.target.value);
  };

  const handleSelectType = (e) => {
    setSelectType(e.target.value);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
    const sortedData = [...movieData];
    sortedData.sort((a, b) => {
      if (e.target.value === "asc") {
        return a.Runtime.localeCompare(b.Runtime, undefined, { numeric: true });
      } else if (e.target.value === "desc") {
        return b.Runtime.localeCompare(a.Runtime, undefined, { numeric: true });
      } else {
        return 0;
      }
    });
    setMoviesData(sortedData);
  };

  const handleCheckboxChange = () => {
    setIsCheck(!isCheck);
  };

  const filterData = movieData.filter((movie) => {
    if (selectType === "") {
      return true;
    } else {
      return movie.Type === selectType;
    }
  });

  return (
    <div className="container">
  <Navbar  />
    <div className={isCheck ? "bg-dark text- bg-infowhite" : "bg-light"}>
        
      <div className="row mt-4">
        <div className="col-lg-6 offset-1 col-md-5 col-sm-4">
          <input
            type="text"
            name="text"
            className="input"
            value={movie}
            onChange={handleInput}
            placeholder="Type here..."
          />
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1">
          <button
            className="btn btn-secondary p-2 ps-5 pe-5 pt-3 pb-3 pt-2 d-flex align-content-center"
            onClick={() => Searchhandle(movie)}
          >
            Search
          </button>
          <select
            className="btn btn-info mt-2"
            name=""
            id="filterselect" 
          
            value={selectType}
            onChange={handleSelectType}
           
          >
            <option value="">All</option>
            <option className="bg-warning text-bg-dark" value="Bollywood">
              Sort by Bollywood
            </option>
            <option value="Hollywood">Sort by Hollywood</option>
          </select>
          <select
            className="btn btn-success mt-2"
            name=""
            id=""
            value={sortType}
            onChange={handleSort}
          >
            <option value="">No Sorting</option>
            <option className="bg-warning text-bg-dark" value="desc">Sort by Descending</option>
            <option value="asc">Sort by Ascending</option>
          </select>
        </div>
        <div className="col-lg-2">
          <label className="switch">
            <input
              type="checkbox"
              checked={isCheck}
              onChange={handleCheckboxChange}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <hr />
      <div className="container">
        <div className="row">
          {Array.isArray(filterData) &&
            filterData.map((movie) => (
              <div
                key={movie.id}
                className="col-lg-4 d-flex align-items-stretch"
              >
                <div className="card bg-warning text-black mb-4">
                  <img
                    className="card-img-top"
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{
                      height: "270px",
                      width: "300px",
                      boxShadow:
                        "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title} ⭐⭐⭐</h5>
                    <p className="card-text">{movie.Runtime}</p>
                    <p className="card-text">{movie.Year}</p>
                    <p className="card-text">{movie.Type}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div></div>
  );
};

export default Cards;
