function GraphNode(data) {
    this.data = data;
    this.visited = false;
    this.adjacents = [];
}

module.exports = GraphNode;