function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    for(var k = 1; k < array.length; k = k + 2){
        var key = array[k]
        var words = array[k+1]
        console.log(key)
        console.log(words)
    }
}
