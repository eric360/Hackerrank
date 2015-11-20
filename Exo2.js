function processData(input) {
    var array = input.split("\n")
    var startingPoint = parseInt(array[array.length - 1])
    var points = []
    for (var i = 1; i < array.length - 1; i++) {
        points.push(array[i].split(" ").map(function (x) {return parseInt(x, 10);}))
    }
   var numberOfPoints = array[0].split(" ")[0]
   var pointsDictionary_ = pointsDictionary(points)
   var exploredGraph = {}
   exploredGraph[startingPoint] = ""
   var res = 0
   while(Object.keys(exploredGraph).length < numberOfPoints){
       var nextEdge_ = nextEdge(potentialEdges(exploredGraph,pointsDictionary_))
       exploredGraph[nextEdge_[0]] = ""
       exploredGraph[nextEdge_[1]] = ""
       res += nextEdge_[2]
   }
    console.log(res)
}
function nextEdge(potentialEdges){
  // 1000000
   var res = [0,0,1000000]
   for(var i = 0; i < potentialEdges.length; i++){
      var edge = potentialEdges[i]
      if(edge[2] < res[2]){
         res = edge
      }
   }
    return res
}
function potentialEdges(exploredGraph,pointsDictionary){
    var potentialEdges_ = []
    for (var exploredPoint in exploredGraph) {
        var allEdges = pointsDictionary[exploredPoint]
        for (var i = 0; i < allEdges.length; i++) {
            var edgeToTest = allEdges[i]
            // typeOf - undefined
            if(exploredGraph[edgeToTest[0]] == undefined || exploredGraph[edgeToTest[1]] == undefined ){
                potentialEdges_.push(edgeToTest)
            }
        }
    }
    return potentialEdges_
}
function pointsDictionary(points){
    var dict = {}
    for(var i = 0; i < points.length; i++){
        var key1 = points[i][0].toString()
        if(dict[key1]){
            dict[key1].push(points[i])
        }
        else{
            dict[key1] = [points[i]]
        }
        var key2 = points[i][1].toString()
        if(dict[key2]){
            dict[key2].push(points[i])
        }
        else{
            dict[key2] = [points[i]]
        }
    }
    return dict
}
