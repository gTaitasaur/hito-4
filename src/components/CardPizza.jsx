const CardPizza = ({ name, desc, price, ingredients, img }) => (
  <div className="card">
    <img src={img} alt={`Pizza ${name}`} />
    <h3>{name}</h3>
    <p><b>Descripción:</b> {desc}</p>
    <p><b>Precio:</b> ${price.toLocaleString()}</p>
    <p><b>Ingredientes</b>: {ingredients.join(', ')}</p>
    <button>Ver más</button>
    <button>Añadir</button>
    <hr />
  </div>
);

export default CardPizza;
