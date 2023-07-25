
function Footer() {
    return (
      <div
        className="container mt-3"
        style={{ backgroundColor: "#00FFFF", color: "black" }}
      >
        <div className="row pt-5 justify-content-center">
          <div className="col-3">
            <h3 className="display-3">Stay in the know</h3>
          </div>
          <div className="col-4">
            <h4 className="p-5 pb-0">Join Our mailing list</h4>
            <h4 className="p-5 pt-0">Email *</h4>
            <hr></hr>
          </div>
          <div className="col-3 mt-5">
            <div style={{ paddingTop: "95px" }}>
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col h-100"> </div>
        </div>
  
        <div className="row justify-content-space-between mt-5">
          <div className="col offset-1 ">
            <h1>Buzzthrough</h1>
            <p>Redundant alt attribute. Screen-readers already announce</p>{" "}
          </div>
          <div className="col offset-2">
            <p>Visit our Website</p>
          </div>
          <div className="col offset-2">
            <p>500 Francic street</p>
            <p>San Francisco , 698462</p>
          </div>
        </div>
        <div className="row">
          <hr></hr>
          <p>© CopyRight all reserved by Buzzthrough</p>
        </div>
      </div>
    );
  }
export default Footer