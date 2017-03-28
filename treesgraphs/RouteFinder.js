function RouteFinder() {};

//Using Breath First Approach
RouteFinder.prototype.find = function(first, end) {
    console.log('finding route between ' + first.data + ' and ' + end.data);
    var queue = [first],
        pred = {};

    first.visited = true;

    while (queue.length > 0) {
        var vertex = queue.shift();

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
                queue.push(adj);
            }
        }
    }
};

module.exports = RouteFinder;
