function processData(input) {
    var array = input.split("\n")
    var grid = []
    for (var k = 1; k < array.length; k++) {
        var line = array[k]
        grid.push(line)
    }
    var res = []
    for(var k = 0; k <= grid.length-1; k++){
        if(k == 0){
            res.push(grid[k])
        }
        else if(k == grid.length-1){
            res.push(grid[k])
        }
        else{
            res.push(processLine(k,grid))
        }
    }
    console.log(res.join("\n"))
}
function processLine(k,grid){
    var res = ""
    res += grid[k][0]
    for(var i = 1; i < grid[k].length-1; i++){
       if(grid[k][i] > Math.max.apply(Math, [grid[k][i-1],grid[k][i+1],grid[k-1][i],grid[k+1][i]])){
            res += "X"
       }
        else{
            res += grid[k][i]
        }
    }
    res += grid[k][grid[k].length-1]
    return res
}
