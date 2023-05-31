import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBarr";
import Home from "./views/Home";
import Carrito from './views/Carrito';
import Detalles from './views/Detalles';
import PizzaContextProvider from './context/PizzaContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {


  return (
    <div className="App">
      <PizzaContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Detalles />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
      </PizzaContextProvider>
     

    </div>
  );
}