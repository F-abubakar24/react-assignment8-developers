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

    return (
        <div className="developers-container">
            <div className="developers">
                {developers.map((developer) => (
                    <Developers developer={developer}></Developers>
                ))}
            </div>
            <div className="selected-developers">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Body;
