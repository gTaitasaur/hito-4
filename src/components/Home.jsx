import CardPizza from './CardPizza';
import { pizzas } from "../data/pizzas.js";
import './Home.css'

const Home = () => (
  <div className='PizzaDiv'>
    {pizzas.map((pizza) => (
      <CardPizza key={pizza.id} {...pizza} />
    ))}
  </div>
);

export default Home;