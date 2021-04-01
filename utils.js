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

    const pName = document.createElement('p');
    pName.textContent = someAgent.agent;

    const pTier = document.createElement('p');
    pTier.textContent = someAgent.tier;

    const pBio = document.createElement('p');
    pBio.textContent = someAgent.description;

    const pPrice = document.createElement('p');
    pPrice.textContent = `Price: $${someAgent.price}/day`;

    li.append(pName, pTier, pBio, pPrice);
    return li;
}