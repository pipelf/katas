var Queue = require('../queue/Queue');

function RouteFinder() {};

//Using Breath First Approach
RouteFinder.prototype.find = function(first, end) {
    console.log('finding route between ' + first.data + ' and ' + end.data);
    var queue = new Queue();
    var pred = {};
        
    queue.add(first);

    first.visited = true;

    while (!queue.isEmpty()) {
        var vertex = queue.remove();

        //visit
        for (var i = 0; i <= vertex.adjacents.length - 1; i++) {
            var adj = vertex.adjacents[i];

            if (!adj.visited) {
                adj.visited = true;

                if (adj === end) {
                    var path = [adj.data];
                    path.push(vertex.data);

                    while (vertex !== first) {
                        vertex = pred[vertex.data];
                        path.push(vertex.data);
                    }

                    path.reverse();

                    console.log(path.join(' ---> '));
                    return;
                }

                pred[adj.data] = vertex;
                queue.add(adj);
            }
        }
    }
};

module.exports = RouteFinder;
