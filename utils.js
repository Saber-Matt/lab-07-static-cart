export function findById(agents, id) {
    for (let item of agents) {
        if (item.id === id) {
            return item;
        }
    }
}