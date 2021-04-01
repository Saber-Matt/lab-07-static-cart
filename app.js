import { findById } from './.js';
import agents from './agentData.js';

const matchingAgent = findById(agents, 'sloth');

if (matchingAgent) { // sanity checking
    console.log(matchingAgent.id);
}