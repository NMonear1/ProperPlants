import "./PlantList.css";

export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <p className="plant-emoji">{plant.image}</p>
      <p>{plant.name}</p>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
}
