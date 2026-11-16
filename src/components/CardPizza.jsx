export default function CardPizza({ name, price, ingredients = [], img }) {
  return (
    <article className="card pizza-card m-3">
      <img src={img} className="card-img-top pizza-card-image" alt={`Pizza ${name}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
        <hr />
        <p className="mb-2"><strong>Ingredientes:</strong></p>
        <ul className="pizza-ingredients">
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient}-${index}`}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="fs-4 fw-bold text-center mb-3">${price.toLocaleString("es-CL")}</p>
        <div className="d-flex justify-content-between gap-2 mt-auto">
          <button type="button" className="btn btn-outline-info">Ver más</button>
          <button type="button" className="btn btn-danger">Añadir</button>
        </div>
      </div>
    </article>
  );
}
