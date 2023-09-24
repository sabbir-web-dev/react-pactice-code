import './Shop.css'

import React from 'react';

const Shop = (props) => {
    const {image,dsc,title,price,rate} = props
    return (
        <div className='shop'>
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p><small>{dsc}</small></p>

            <div className="sBox">
                <p>Price: <big>{price}</big></p>
                <p>Rate: <big>{rate}</big></p>
            </div>

        </div>
    );
};

export default Shop;