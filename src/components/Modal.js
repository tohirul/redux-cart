import React from "react";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/cart/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <aside className="modal-container">
        <div className="modal">
          <h4>remove all items from your cart?</h4>
          <div className="btn-container">
            <button
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}
            >
              confirm
            </button>
            <button
              className="btn clear-btn"
              onClick={() => dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Modal;
