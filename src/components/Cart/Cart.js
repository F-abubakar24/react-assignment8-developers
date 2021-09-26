import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className="cart-wrapper">
            <h2>Selected Developers</h2>
            <h4>Total Developers: {cart.length}</h4>
            {
                cart.map(data => <p key={data.id}>Name:{data.name}</p>)
            }

        </div>
    );
};

export default Cart;
