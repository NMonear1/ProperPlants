import { useState } from "react";
import "./App.css";
import PLANTS from "./data";
import PlantList from "./components/plants/PlantList.jsx";
import Cart from "./components/Cart/Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemInCart = cart.find((item) => item.id === plant.id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const updateQuantity = (plantId, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plantId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="app-div">
      <div className="plant-panel">
        <h1>Proper Plants</h1>
        <PlantList plants={PLANTS} addToCart={addToCart} />
      </div>
      <div className="cart-panel">
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          emptyCart={emptyCart}
        />
      </div>
    </div>
  );
}
