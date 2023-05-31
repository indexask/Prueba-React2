import { createContext, useEffect, useState } from "react";
import pizzitas from "../pizzas.json"
import { useParams } from "react-router-dom";

export const pizzaContext = createContext()

export default function PizzaContextProvider({ children }) {

    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [carritoTotal, setCarritoTotal] = useState(0);

    const getData = async () => {
            setPizzas(pizzitas);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <pizzaContext.Provider value={{ pizzas, carritoTotal, carrito, setCarrito, setCarritoTotal }}>
            {children}
        </pizzaContext.Provider>
    )
}