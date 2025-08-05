import "./Cart.css";
import CartItem from "./CartItem";

export default function Cart({ cart, updateQuantity, emptyCart }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <button onClick={emptyCart}>Empty Cart</button>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        ))
      )}
    </div>
  );
}
