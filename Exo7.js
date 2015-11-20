function processData(word) {
    var length = word.length
    var test = Math.sqrt(word.length)
    var floor = Math.floor(test)
    var col;
    var row;
    if(floor * floor >= length){
        col = floor
        row = floor
    }
    else if(floor * (floor + 1) >= length){
        col = floor + 1
        row = floor
    }
    else{
        col = floor + 1
        row = floor + 1
    }
    var grid = grid_(row,col,word)
    var res = ""
   for (var i = 0; i < col; i++) {
        for (var j = 0; j < row; j++) {
            res += grid[j][i]
        }
       res += " "
   }
    console.log(res)
}

function grid_(row,col,word){
   var res = []
   for (var i = 0; i < row; i++) {
       var temp = []
        for (var j = 0; j < col; j++) {
            if(word.length > 0){
                temp.push(word.substring(0,1))
                word = word.substring(1)
            }
            else{
                temp.push("")
            }
        }
       res.push(temp)
   }
   return res
}
