import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

function Pizza({pizzaObj}) {
  console.log("ffbskjfkfkf", pizzaObj.name)
  return (
    <div className="conatiner">
      <h1>Pizza</h1>
      <img
        style={{ width: "300px" }}
        src={"Images/pizza.jpg"}
        alt=""
      />
      <h2>{pizzaObj.name}</h2>
      <p>{pizzaObj.ingredient}</p>
      <h3>{pizzaObj.soldOut ? 
      (<span>Sold Out</span>) : (
        <span>{pizzaObj.price}</span>
      )    
} </h3>
    </div>
  );
}

function Header() {
  return(
    <div className="container">
    <div className="row">
  <h1 className="col-4 text-danger m-auto">Fast React Pizza</h1>
 </div> 
 </div>
 );
}
const pizzaData = [
  {
    name: "Pizza Margherita",
    ingredient: "Tomato, Mozzarella, Basil",
    price: 12,
  },
  {
    name: "Pepperoni Pizza",
    ingredient: "Tomato, Mozzarella, Pepperoni",
    price: 15,
  },
  {
    name: "Vegetarian Pizza",
    ingredient: "Tomato, Mozzarella, Mixed Vegetables",
    price: 10,
  },
  {
    name: "Kalloninging Pizza",
    ingredient: "Tomato, Mozzarella, Mixed Vegetables",
    price: 10,
  },
  {
    name: "farruccio Pizza",
    ingredient: "Tomato, Mozzarella, Mixed Vegetables",
    price: 10,
  },
  {
    name: "Salingo Pizza",
    ingredient: "Tomato, Mozzarella, Mixed Vegetables",
    price: 10,
  },
  // Add more pizza objects as needed
];

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="container">
      <div className="row">
        <h2 className="col-12 mt-4 mb-4 text-secondary text-center">Our Menu</h2>
      </div>
      {numPizzas > 0 ? (
        <>
        <p>Authentic Italian cuisine, 6 creative dishesh to choose from All from our stone oven , all organic delicious</p>
       
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col" key={pizza.name}>
              <Pizza pizzaObj={pizza} />
            </div>
          ))}
        </div>
        </>
      ) : <p>We're still working on menu, Please come back later</p>}
    </main>
  );
}


function Footer() {
  const hour = new Date().getHours();
  const openHour =12;
  const closeHour =22;
const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} 
        openHour ={openHour}
        />
      ):<p>We're open until {closeHour}:00,Come visit us or order</p>}

    </footer>
  )
}

function Order({closeHour,openHour}){
  return 
  (
   <div className="order">
          <p>
            We're open {openHour}:00 to {closeHour}:00 , come visit us order online.
          </p>
          <button className="btn btn-danger ms-5">Order Onine</button>
        </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export default App
