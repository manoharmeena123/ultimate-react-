import axios from "axios";
import React, { useEffect, useState } from "react";

function Binding() {
  const [count, setCount] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);


  useEffect(()=>{
handleGetData()
  },[])
  function handleGetData() {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        console.log(res.data);
        setCount(res.data);
        setDataFetched(true); // Set dataFetched to true after fetching data
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <div className="container">
        <button type="button" className="btn btn-secondary" onClick={handleGetData}>
          GetData
        </button>
        <div className="row">
       
             {dataFetched && (
          // Render the data only if it has been fetched
          count.map((data) => (  
             <div className="col-lg-4 d-flex bg-success "  style={{border:"1px solid black",color:"white", margin:"1px"}}>
            <div
              className="card-body"
             
              key={data.id}
            >
              <p className="card-text"> {data.id}</p>
              <p className="card-text">{data.title}</p>
              <p className="card-text">{data.completed.toString()}</p>
            </div>
            </div>
          ))
        )}
        </div>
     
      </div>
    </div>
  );
}

export default Binding;
