//for Loop to render lis
import { agents } from './agentData.js';
import { createAgentLi } from '../utils.js';

const ul = document.querySelector('#list');

for (let agent of agents) {
    const li = createAgentLi(agent);
    ul.append(li);
}