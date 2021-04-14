import { findById } from './utils.js';
import { agents } from './product/agentData.js';

const matchingAgent = findById(agents, 'sloth');

if (matchingAgent) { // sanity checking
    console.log(matchingAgent.id);
}