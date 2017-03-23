var RouteFinder = require('./RouteFinder'); 

function Graph(root, routeFinder) {
    this.root = root;
    this.routeFinder = routeFinder || new RouteFinder();
};

Graph.prototype.findRoute = function(a, b) {
    this.resetNodes(a);
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

Graph.prototype.resetNodes = function(starnode) {
     //Depth First Search approach
    if(starnode === null) {
        return;
    }
    
    if(!starnode.visited) return;
    
    starnode.visited = false;

    for(var ind in starnode.adjacents) {
        this.resetNodes(starnode.adjacents[ind]);
    }
};


module.exports = Graph;