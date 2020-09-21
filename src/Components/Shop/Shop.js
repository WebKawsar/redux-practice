import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    
    const {products, addToCart} = props;

    console.log(props);
    console.log(addToCart);

    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => <Product addToCart={addToCart} key={pd.id} product={pd}></Product>)
            }
        </div>
    );
};


const mapStateToProps = state => {

    return {
        cart: state.cart,
        products: state.products
    }

}

const mapDispatchToProps = {
    addToCart: addToCart

}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// connectToStore(Shop)



export default connect(mapStateToProps, mapDispatchToProps)(Shop);