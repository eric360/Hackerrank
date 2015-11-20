function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    var points = array.slice(1,array.length)
    var pointsBis = [ [ '2', '1' ],
  [ '4', '3' ],
  [ '5', '2' ],
  [ '7', '2' ],
  [ '8', '6' ],
  [ '9', '8' ],
  [ '10', '8' ] ]
    var pointDictionary = pointDictionary_(pointsBis)
    var subgraphs_ = subgraphs(pointDictionary)
    console.log(subgraphsIsOk(subgraphs_))
}

function subgraphsIsOk(subgraphs){
     for (var k = 0; k < subgraphs.length; k++) {
        var subgraph = subgraphs[k]
        if( Object.keys(subgraph).length % 2 === 1){
            return false
        }
    }
    return true
}
function subgraphs(pointDictionary){
    var subgraphs = []
    while(Object.keys(pointDictionary).length > 0){
        var subgraph = {}
        var point = Object.keys(pointDictionary)[0]
        subgraph[point] = ""
        var queue = []
        if(pointDictionary[point] != undefined ){
           queue = queue.concat(pointDictionary[point])
        }
        while(queue.length > 0){
            subgraph[queue[0][0]] = ""
            if(pointDictionary[queue[0][0]] != undefined ){
               queue = queue.concat(pointDictionary[queue[0][0]])
               delete pointDictionary[queue[0][0]]
            }
            queue.splice(0,1)
        }
        delete pointDictionary[point]
        subgraphs.push(subgraph)
    }
    return subgraphs
}
function pointDictionary_(array){
    var res = {}
    for (var k = 0; k < array.length; k++) {
        var edge = array[k]
        if(res[edge[1]] == undefined ){
            res[edge[1]] = [[edge[0]]]
        }else{
            res[edge[1]].push([edge[0]])
        }
        if(res[edge[0]] == undefined ){
            res[edge[0]] = [[edge[1]]]
        }else{
            res[edge[0]].push([edge[1]])
        }
    }
    return res
}
