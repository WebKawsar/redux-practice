import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions";


const initialvalue = {
    cart: [],
    products: [
        {name: "Lenovo latop", id: 101},
        {name: "Afsus latop", id: 102},
        {name: "Hp latop", id: 103},
        {name: "Dell latop", id: 104},
        {name: "Samsung latop", id: 105}
    ]
}


const CartReducers = (state = initialvalue, action) => {
    switch(action.type){

        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart, newId];
            return {products: state.products, cart: newCart }

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id)
            return { cart: remainingCart}
            
        default:
            return state;

    }

}


export default CartReducers;