function RouteFinder() {};

RouteFinder.prototype.find = function (a, b) {
    //Using Breath First Approach
    console.log('finding route between ' + a.data +  ' and ' + b.data);
    var route = [];
    
    
    route.push(a);
    return route;
};

module.exports = RouteFinder;