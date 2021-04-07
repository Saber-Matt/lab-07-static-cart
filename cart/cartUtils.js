import { cart } from './cartData.js';
import { createCartRow, findById, createTotalRow } from '../utils.js';
import { agents } from '../product/agentData.js';

const tBody = document.querySelector('#tBody');
for (let item of cart) {
    const agentInCart = findById(agents, item.id);

    const tr = createCartRow(item, agentInCart);

    tBody.append(tr);

}
const totalRow = createTotalRow(cart, agents);

tBody.append(totalRow);



const stringyCart = JSON.stringify(cart);
localStorage.setItem(cart, stringyCart);
const CartFromLocalStorage = localStorage.getItem(cart);
const parsedCart = JSON.parse(cartFromLocalStorage);
localStorage;