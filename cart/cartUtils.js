import { cart } from './cart-data.js';
import { createCartRow, findById, createTotalRow } from '../utils.js';
import { agents } from '../folder/agentData.js';

const tBody = document.querySelector('#tBody');
for (let item of cart) {
    const agentInCart = findById(agents, item.id);

    const tr = createCartRow(item, agentInCart);

    tBody.append(tr);

}
const totalRow = createTotalRow(cart, agents);

tBody.append(totalRow);