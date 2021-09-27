import React from "react";
import "./Developers.css";

const Developers = (props) => {
    const { pic, name, email, website, salary, company_name, city } =
        props.developer;

    // ===============================
    // showing developers details on the ui;
    // ===============================

    return (
        <div className="single-developers">
            <div className="pic">
                <img src={pic} alt="" />
            </div>
            <div className="info">
                <p>
                    <span>Name:</span> {name}
                </p>
                <p>
                    <span>E-mail:</span> {email}
                </p>
                <p>
                    <span>Website:</span> {website}
                </p>
                <p>
                    <span>Salary:</span> {salary} $
                </p>
                <p>
                    <span>Now Working Company:</span> {company_name}
                </p>
                <p>
                    <span>He Lives In:</span> {city}
                </p>

                <button
                    onClick={() => props.handleAddToCart(props.developer)}
                    className="cart-btn"
                >
                    <i class="fas fa-cart-arrow-down"></i> Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Developers;
