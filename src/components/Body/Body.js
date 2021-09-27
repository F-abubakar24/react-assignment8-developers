import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Developers from "../Developers/Developers";
import "./Body.css";

const Body = () => {
    // This is for developer details
    const [developers, setDevelopers] = useState([]);
    useEffect(() => {
        fetch("./developers.json")
            .then((res) => res.json())
            .then((data) => setDevelopers(data));
    }, []);

    // This is for cart data prosesing
    const [cart, setCart] = useState([]);
    useEffect(() => {}, []);

    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    };

    return (
        // =====================================
        // Showing developers details on the (UI) part
        // =====================================

        <div className="developers-container">
            <div className="developers">
                {developers.map((developer) => (
                    <Developers
                        handleAddToCart={handleAddToCart}
                        key={developer.id}
                        developer={developer}
                    ></Developers>
                ))}
            </div>

            {/* ===================================== */}
            {/* Selected developers cart (UI) part */}
            {/* ===================================== */}

            <div className="selected-developers">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;
