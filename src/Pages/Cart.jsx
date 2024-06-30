import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { MdDeleteForever } from "react-icons/md";
import CartContext from "../CartContext";
import { Link } from "react-router-dom";


function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const totalAmount = cart.reduce((acc, cartItem) => acc + cartItem.amount, 0);
  if (cart.length > 0) {
    return (
      <div className="cart-page">
        <h2 className="cart-page-heading">Your Cart</h2>
        <div className="cart-page-top">
          <p style={{ width: "45%" }}>Product</p>
          <p style={{ width: "30%" }}>Quantity</p>
          <p style={{ width: "25%", textAlign: "right" }}>Total</p>
        </div>
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-product">
              <div className="cart-item-img">
                <img src={item.coverImage} alt={item.title} />
              </div>
              <div className="cart-item-info">
                <p className="cart-book-name">{item.title}</p>
                <p className="cart-book-price">{item.price}</p>
              </div>
            </div>
            <div className="cart-item-quantity">
              <div className="quantity-span-cart">
                <button onClick={() => decreaseQuantity(item.bookID)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.bookID)}>+</button>
              </div>
              <MdDeleteForever
                onClick={() => removeFromCart(item.bookID)}
                className="cart-delete"
              />
            </div>
            <div className="cart-item-total">{item.amount.toFixed(2)}</div>
          </div>
        ))}

        <div className="checkout-summary">
          <div className="checkout-total">
            <p className="checkout-label">Estimated total</p>
            <p className="checkout-amount">$ {totalAmount.toFixed(2)}</p>{" "}
            {/* Replace with actual total calculation */}
          </div>
          <p className="checkout-details">
            Taxes, discounts, and{" "}
            <span className="checkout-link">shipping</span> calculated at
            checkout.
          </p>
          <button className="checkout-button">Check out</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="no-items-in-cart">
        <h2 className="cart-page-heading no-cart">Your Cart is Empty</h2>
        <Link to={"/category/all books"}>
          <button className="go-back">Go Back To Shopping</button>
        </Link>
      </div>
    );
  }
}

export default Cart;
