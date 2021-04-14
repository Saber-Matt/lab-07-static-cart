//write a function that initializes a cart if there isn't one already
//import findById from './utils.js';

import { findById } from '../utils.js';

const CART = 'CART';
export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringyCart);
    if (parsedCart) return parsedCart;
    else return [];
}

export function setCart(myFullCart) {
    const stringyMyFullCart = JSON.stringify(myFullCart);
    localStorage.setItem(CART, stringyMyFullCart);
}

export function addItemToCart(itemId) {
    const myFunCart = getCart();
    //console.log(myFunCart);
    const matchingItem = findById(myFunCart, itemId);
    if (matchingItem) matchingItem.quantity++;
    else {
        const item = {
            id: itemId,
            quantity: 1
        };
        myFunCart.push(item);
    }

    setCart(myFunCart);

}

//export { addItemToCart }