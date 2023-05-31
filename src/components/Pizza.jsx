import "../assets/css/style.css";
import { pizzaContext } from "../context/PizzaContextProvider";
import Card from 'react-bootstrap/Card';
import { useEffect, useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from "react-router-dom";

export default function Pizza() {
  
  const { pizzas, setPizzas, carrito, carritoTotal, setCarrito, setCarritoTotal } = useContext(pizzaContext)
  const  target  = useParams()
  const [ pizza , setPizza ] = useState([]);

  
  const getPizza = async()=>{
    const index = await pizzas.filter((pizza) => pizza.id === target.id);
    setPizza(...index)
  }

  useEffect(() => {
    getPizza();
  }, );

  const toggleUser = p => {
    if(carrito.find(item => item.id === p.id)) {
      const products = carrito.map(item =>
        item.id === p.id
        ? {...item, cant: item.cant + 1 }
        : item
        );
        setCarritoTotal(carritoTotal + p.price * p.cant)
        return setCarrito([...products])
    }
    setCarritoTotal(carritoTotal + p.price * p.cant)
    setCarrito([...carrito, p])
  };

  return (
    <>
      {pizza ? (
        <div className="card m-3">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src={pizza.img}
                />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {pizza.name ? pizza.name[0].toUpperCase() + pizza.name.substring(1):null}
                </h5>
                <hr />
                <p className="card-text">{pizza.desc}</p>
                <hr />
                <dl>
                  <dt>
                    <p>Ingredientes:</p>
                  </dt>
                <ul>
                  {pizza.ingredients ? pizza.ingredients.map((i) => <li key={i}>🍕{i[0].toUpperCase() + i.substring(1)}</li>):null}
                </ul>
                </dl>
                <hr />
                <div className="">
                    <button onClick={()=>{
                        toggleUser(pizza)
                    }}>
                        Agregar a 🛒
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}