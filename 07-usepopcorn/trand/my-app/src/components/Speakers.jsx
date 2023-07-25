

function Speakers() {
    return (
      <div id="speakers" className="container pt-5 bg-black">
        <div className="row p-5">
          <div className="col-md-3 m-auto">
            <h2>Meet the Speakers</h2>
          </div>{" "}
        </div>
        <div className="row d-flex justify-content-space-evenly m-auto">
          <div className="col-md-4">
            <img
              src="https://www.w3schools.com/howto/img_snow.jpg"
              alt="Snow"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://www.w3schools.com/howto/img_forest.jpg"
              alt="Forest"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://www.w3schools.com/howto/img_mountains.jpg"
              alt="Mountains"
              style={{ width: "80%" }}
            />
          </div>
        </div>
        <div className="hr p-4">
          <hr />
        </div>
      </div>
    );
  }

  export default Speakers