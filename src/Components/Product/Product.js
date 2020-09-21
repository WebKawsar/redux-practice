import React from 'react';

const Product = (props) => {
    const { product, addTocart} = props;

    console.log(props);

    return (
        <div style={{border: "1px solid purple", margin: "20px"}}>
            <h2>{product.name}</h2>
            <button onClick={() => addTocart(product.id)}>Add to Cart</button>
        </div>
    );
};

export default Product;