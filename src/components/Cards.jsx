import "../assets/css/style.css";
import { pizzaContext } from "../context/PizzaContextProvider";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useEffect, useContext, useState } from "react";

export default function Home() {

  const { pizzas, setPizzas, carrito, carritoTotal, setCarrito, setCarritoTotal } = useContext(pizzaContext)
  const [target, setTarget] = useState()

  const navigate = useNavigate();
  const handleClick = (target) => {
    navigate(`/pizza/${target}`);
  };

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
    pizzas.map((p) => {
      return (
        <Card key={p.id} style={{ width: '20rem' }}>
          <Card.Img variant="top" src={p.img} />
          <Card.Body>
            <Card.Title>{p.name ? p.name[0].toUpperCase() + p.name.substring(1):null}</Card.Title>
            <Card.Text>Ingredientes:</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item > <ul key={p.id}>
              {p.ingredients.map((ing) =>
                <li key={ing} >🍕 {ing[0].toUpperCase() + ing.substring(1)}</li>)}
            </ul>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item >
              Precio: ${p.price}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary" onClick={() => {
              setTarget(p.id)
              handleClick(p.id)
            }}
            >Ver mas</Button>{' '}
            <Button variant="danger" key={p.id} id={p.id} onClick={() => {
              toggleUser(p)
              console.log("cantidad es : ", p.cant)
            }}
            >Agregar a 🛒</Button>
          </Card.Body>
        </Card>
      );
    })
  );
}
