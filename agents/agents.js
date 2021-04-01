console.log('agents assemble');

import { agents } from '../agentData.js';
import { createAgentsLi } from '../agentData.js';

console.log(agents);

// i need my UL from the DOM
const ul = document.querySelector('.agents');

for (let agent of agents) {
    // for every agent, render an li
    const li = createAgentsLi(agent);
    ul.append(li);
}

// and append that li to the ul