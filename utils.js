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