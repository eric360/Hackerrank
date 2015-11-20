function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    var m = parseInt(array[0][1], 10)
    var q = array[m+1][0]
    var points = array.slice(1,m+1)
    var pointDictionary_ = pointDictionary(points)
}
function pointDictionary(array){
    var res = {}
    for (var k = 0; k < array.length; k++) {
        var edge = array[k]
        if(res[edge[1]] == undefined ){
            res[edge[1]] = [[edge[0],edge[2]]]
        }else{
            res[edge[1]].push([edge[0],edge[2]])
        }
    }
    return res
}


//NEW last
function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    var m = parseInt(array[0][1], 10)
    var q = array[m+1][0]
    var questions = array.slice(m+2,array.length)
    var points = pointDictionary(array.slice(1,m+1))
     console.log(value(questions[2][0],questions[2][1],points))
     console.log('3'+'4')
}
function value(startPoint,endPoint,points){
    console.log(points)
    if(points[endPoint] == undefined){
        return -1
    }
    else{
        console.log(points[endPoint])
        return value_(startPoint,points[endPoint],points)
    }
}
function value_(startPoint,edges,points){
    var res = -1
    var nextEdges = []
    for(var i = 0; i < edges.length; i++){
       if(edges[i][0] == startPoint){
           var temp = parseInt(edges[i][1], 10)
           if( (res = -1)|| (res > temp)){
               res = temp
           }
       }
       else{
           if(points[edges[i][0]] != undefined){
               for(var k = 0; k < points[edges[i][0]].length; k++){
                   nextEdges.push(points[edges[i][0]][k])
               }
           }
       }
    }
    console.log("Next Edges")
   console.log(nextEdges)
    if(nextEdges.length == 0){
        return res
    }
    else{
        var temp =  value_(startPoint,nextEdges,points)
        if(temp == -1){
            return res
        }
        else{
            return Math.min(res, temp);
        }
    }

}
function pointDictionary(array){
    var res = {}
    for (var k = 0; k < array.length; k++) {
        var edge = array[k]
        if(res[edge[1]] == undefined ){
            res[edge[1]] = [[edge[0],edge[2]]]
        }else{
            res[edge[1]].push([edge[0],edge[2]])
        }
    }
    return res
}

// Floyd Warshall Javascript

function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    var n = parseInt(array[0][0], 10)
    var m = parseInt(array[0][1], 10)
    var q = array[m+1][0]
    var questions = array.slice(m+2,array.length)
    var points = pointDictionary(array.slice(1,m+1))
    var matrix = matrix_(n)
    for (var point1 in points) {
        for (var point2 in points[point1]) {
            matrix[point1-1][point2-1] = points[point1][point2]
        }
    }
    for (var k = 0; k < n; k++) {
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                var dij = matrix[i][j]
                var dik = matrix[i][k]
                var dkj = matrix[k][j]
                if(dij > dik + dkj){
                    matrix[i][j] = dik + dkj
                }
            }
        }
    }
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i]
        var point1 = question[0]
        var point2 = question[1]
        var answer = matrix[point1-1][point2-1]
        if(answer == Infinity){

            console.log("-1")
        }
        else{
            console.log(answer)
        }
    }
}
function matrix_(n){
    var res = []
    for (var i = 0; i < n; i++) {
        var temp =[]
        for (var j = 0; j < n; j++) {
             temp.push(Infinity)
        }
        res.push(temp)
    }
    for(var i = 0; i < n; i++){
        res[i][i] = 0
    }
    return res
}
function pointDictionary(array){
    var res = {}
    for (var k = 0; k < array.length; k++) {
        var edge = array[k]
        if(res[edge[0]] == undefined ){
            res[edge[0]] = {}
            res[edge[0]][edge[1]] = parseInt(edge[2], 10)
        }
        else{
            res[edge[0]][edge[1]] = parseInt(edge[2], 10)
        }
    }
    return res
}
