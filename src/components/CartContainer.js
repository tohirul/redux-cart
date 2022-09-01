import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal } from "../features/cart/modalSlice";
import { CartItem } from "./CartItem";
// import { CartItem } from "./CartItem";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  console.log(cartItems);
  return amount < 1 ? (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  ) : (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item, idx) => {
          return <CartItem key={idx} {...item} />;
        })}
      </div>
      <footer>
        <hr /> <br />
        <div className="cart-total">
          <h4>
            Total <span>$ {total.toFixed(3)}</span>
          </h4>
        </div>
        <button className="clear-btn btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
