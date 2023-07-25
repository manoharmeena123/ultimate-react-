


function Learn() {
    return (
      <div id="learnning" className="container pt-5 bg-black color-#fff">
        <div className="row p-2">
          <div className="col-md-4 m-auto">
            <h2>What you will Learn</h2>
          </div>{" "}
        </div>
        <div className="row d-flex justify-content-center m-auto p-3 pb-3">
          <div className="col-md-4">
            <h1> ▶</h1>
            <h1 className="display-1 font-weight-bolder d-flex justify-content-space-evenly text-align-center">
              01
            </h1>
            <p className="p-3 text-white">
              Redundant alt attribute. Screen-readers already announce Redundant
              alt attribute. Screen-readers already announce
            </p>
          </div>
          <div className="col-md-4">
            <h1> ✔</h1>
            <h1 className="display-1 font-weight-bolder d-flex justify-content-space-evenly text-align-center">
              02
            </h1>
            <p className="p-3 text-white">
              {" "}
              Redundant alt attribute. Screen-readers already announce Redundant
              alt attribute. Screen-readers already announce
            </p>
          </div>
          <div className="col-md-4">
            <h1> ➡</h1>
            <h1 className="display-1 font-weight-bolder d-flex justify-content-space-evenly text-align-center">
              03
            </h1>
            <p className="p-3 text-white">
              Redundant alt attribute. Screen-readers already announce Redundant
              alt attribute. Screen-readers already announce
            </p>
          </div>
        </div>
        <div className="row p-5 m-3 mb-4 align-content-center">
          <div className="col-2 offset-4">Ready to create a Buzz?</div>
          <div className="col-2">
            <button className="btn btn-primary">Register Now</button>{" "}
          </div>
        </div>
      </div>
    );
  }
  export default Learn