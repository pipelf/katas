var RouteFinder = require('./RouteFinder'); 

function Graph(root, routeFinder) {
    this.root = root;
    this.routeFinder = routeFinder || new RouteFinder();
};

Graph.prototype.findRoute = function(a, b) {
    return this.routeFinder.find(a, b);
};

Graph.prototype.printGraph = function(starnode) {
    //Depth First Search approach
    if(starnode === null) {
        return;
    }
    
    process.stdout.write(starnode.data +  "");
    
    if(starnode.visited) return;
    
    starnode.visited = true;

    for(var ind in starnode.adjacents) {
        console.log('')
        process.stdout.write(starnode.data + "-->");
        this.printGraph(starnode.adjacents[ind]);
    }
};



module.exports = Graph;