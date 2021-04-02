export function findById(agents, id) {
    for (let item of agents) {
        if (item.id === id) {
            return item;
        }
    }
}
export function createAgentLi(someAgent) {
    const li = document.createElement('li');
    li.classList.add('styleLi');

    const pTier = document.createElement('p');
    pTier.textContent = `Tier ${someAgent.tier}`;

    const pImage = document.createElement('img');
    pImage.src = someAgent.image;

    const pName = document.createElement('p');
    pName.textContent = someAgent.agent;

    const pBio = document.createElement('p');
    pBio.textContent = someAgent.description;

    const pPrice = document.createElement('p');
    pPrice.textContent = `Price: $${someAgent.price}/day`;

    const pButton = document.createElement('button');
    pButton.textContent = 'Add to Cart';

    pButton.addEventListener('click', () => {
        console.log(
            'clicked'
        );
    });


    li.append(pTier, pImage, pName, pBio, pPrice, pButton);
    return li;
}

export function createCartRow(item, matchingAgent) {
    const tr = document.createElement('tr');

    const proCell = document.createElement('td');
    const qtyCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const totalCell = document.createElement('td');
    //add text content for pro qty price (calculate total) 
    proCell.textContent = matchingAgent.agent;
    qtyCell.textContent = item.quantity;
    priceCell.textContent = `$${matchingAgent.price}/day`;
    totalCell.textContent = `$${item.quantity * matchingAgent.price}`;

    tr.append(proCell, qtyCell, priceCell, totalCell);
    return tr;
}

export function createTotalRow(cart, agents) {
    const trPaymentDue = document.createElement('tr');
    //create cell elements
    const tdTotal = document.createElement('td');
    const emptyCell2 = document.createElement('td');
    const emptyCell3 = document.createElement('td');
    const tdCalcTotal = document.createElement('td');
    //inject data into row with textContent

    let sumTotal = 0;
    for (let item of cart) {
        const matchingAgent = findById(agents, item.id);
        const rowTotal = matchingAgent.price * item.quantity;
        sumTotal = rowTotal + sumTotal;
    }

    tdTotal.textContent = 'Total Due:';
    tdCalcTotal.textContent = `$${sumTotal}`;
    //append row 

    trPaymentDue.append(tdTotal, emptyCell2, emptyCell3, tdCalcTotal);
    return trPaymentDue;
}
