import Cards from "../components/Cards";

export default function Home() {

  return (
    <div id="Home"  >
      <div className="titulo">
      <h1 >!Pizzeria Mama mia¡</h1>
      <h4>!Tenemos las mejores pizzas que podras encontrar¡</h4>
      <hr />
      </div>
      <div className="p-3 grid-columns-4 galeria container">
      <Cards />
      </div>

    </div>
  );
}
