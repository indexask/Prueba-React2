import "../assets/css/style.css";
import { pizzaContext } from "../context/PizzaContextProvider";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";

export default function Carrito() {

    const { carrito, carritoTotal } = useContext(pizzaContext)

    return (
        <div className="detalles container"  >
            <h2 className="titcarro">Detalles de compra: </h2>

            {carrito.map((e) => {
                return (
                    <div className="cardCarrito " key={e.id} >
                        <Card body className="d-flex">
                            <div className="d-flex textCarrito">
                            <img src={e.img} style={{ width: "50px" }} alt="" />
                            <p className="pName" >{e.name}</p>
                            <p className="pNamee">Precio: ${e.price}</p>

                            <div className="">
                            <p className="pNamee">Cantidad: {e.cant}</p>
                            </div>

                            </div>
                        </Card>
                        
                    </div>

                )
            })}
        <h2>Total a pagar: ${carritoTotal} </h2>
        <Button>Ir a Pagar</Button>
        </div>
    );
}