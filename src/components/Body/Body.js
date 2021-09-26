import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Developers from "../Developers/Developers";
import "./Body.css";

const Body = () => {
    const [developers, setDevelopers] = useState([]);
    useEffect(() => {
        fetch("./developers.json")
            .then((res) => res.json())
            .then((data) => setDevelopers(data));
    }, []);

    const [cart, setCart] = useState([]);
    useEffect(() => {
        
    }, [])

    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    };


    return (
        <div className="developers-container">
            <div className="developers">
                {developers.map((developer) => (
                    <Developers
                        handleAddToCart={handleAddToCart}
                        key={developers.id}
                        developer={developer}
                    ></Developers>
                ))}
            </div>
            <div className="selected-developers">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;
