import "./Cart.css";

export default function CartItem({ item, updateQuantity }) {
  return (
    <div className="cart-item">
      <p className="item-info">
        {item.image} {item.name}
      </p>
      <div className="cart-buttons">
        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
    </div>
  );
}
