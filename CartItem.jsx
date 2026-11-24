import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calcular el importe total del carrito
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const unitPrice = parseFloat(item.cost.substring(1));
      return total + unitPrice * item.quantity;
    }, 0);
  };

  // Calcular el costo total por planta
  const calculateTotalCost = (item) => {
    const unitPrice = parseFloat(item.cost.substring(1));
    return unitPrice * item.quantity;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert('Próximamente: funcionalidad de pago en desarrollo.');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2>Importe total del carrito: ${calculateTotalAmount()}</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Precio unitario: {item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">Subtotal: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>
          Continuar comprando
        </button>
        <button className="get-started-button1" onClick={handleCheckoutShopping}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
