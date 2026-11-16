import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../data/pizzas";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container py-4">
        <h2 className="text-center mb-4">Nuestras pizzas</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} {...pizza} />
          ))}
        </div>
      </main>
    </div>
  );
}
