function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    for(var k = 2; k < array.length; k = k + 2){
        var line = array[k]
        if(line.length == 1){
            console.log("YES")
        }
        else if(line.length == 2){
            console.log("NO")
        }else{
            var lineInt = line.map(function(item) { return parseInt(item, 10);})
            if(check(sum(lineInt))){
                console.log("YES")
            }
            else{
                console.log("NO")
            }
        }
    }
}
function check(array){
  var lastValue = array[array.length - 1]
  for(var k = 1; k < array.length - 1; k++){
     var value1 = array[k - 1]
     var value2 = lastValue - array[k]
     if(value1 == value2){
         return true
     }
  }
  return false
}
function sum(array){
    var res =[]
    res.push(array[0])
    for(var k = 1; k < array.length; k++){
        res.push(res[k-1]+ array[k])
    }
    return res
}
