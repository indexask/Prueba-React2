import { Link } from "react-router-dom";
import { useContext } from "react";
import { pizzaContext } from "../context/PizzaContextProvider";

export default function Navbarr() {
  const { setCarritoTotal, carritoTotal } = useContext(pizzaContext)
  return (
    <nav className="navbar">
      <Link className="left" to="/">🍕Pizzeria Mamma mia! </Link> 
      <Link className="right" to="/Carrito"> 🛒${carritoTotal} </Link>
    </nav>
  );
}
