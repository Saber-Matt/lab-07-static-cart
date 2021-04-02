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
    priceCell.textContent = `Price: $${matchingAgent.price}/day`;
    totalCell.textContent = `Price: $${item.quantity * matchingAgent.price}`;

    tr.append(proCell, qtyCell, priceCell, totalCell);
    return tr;


}