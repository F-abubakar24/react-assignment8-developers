import React from 'react';
import './Developers.css';

const Developers = (props) => {
    console.log(props.developer)
    const {pic, name, email, website, salary, company_name, city} = props.developer;
    return (
        <div className="single-developers">
            <div className="pic">
                <img src={pic} alt="" />
            </div>
            <div className="info">
                <p><span>Name:</span> {name}</p>
                <p><span>E-mail:</span> {email}</p>
                <p><span>Website:</span> {website}</p>
                <p><span>Salary:</span> {salary} $</p>
                <p><span>Now Working Company:</span> {company_name}</p>
                <p><span>He Lives In:</span> {city}</p>
                <button className="cart-btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default Developers;