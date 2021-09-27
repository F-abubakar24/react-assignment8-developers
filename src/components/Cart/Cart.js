import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const developer of cart) {
        // console.log(developer.quantity)
        if (!developer.quantity) {
            developer.quantity = 1;
        }
        const newPrice = total + developer.salary;
        total = newPrice;
        totalQuantity = totalQuantity + developer.quantity;
    }

    return (
        <div className="cart-wrapper">
            <h2>Selected Developers</h2>
            <h4><span className="selected-cart-text">Total Developers:</span> {totalQuantity}</h4>
            <p><span className="selected-cart-text">Total Salary:</span> {total}</p>
            {cart.map((data) => (
                <p key={data.id}><span className="selected-cart-text">Name:</span> {data.name}</p>
            ))}
        </div>
    );
};

export default Cart;
