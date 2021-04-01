import { findById } from './.js';
import agents from './Product/agentData.js';

const matchingAgent = findById(agents, 'sloth');

if (matchingAgent) { // sanity checking
    console.log(matchingAgent.id);
}