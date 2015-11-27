function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    for(var k = 1; k < array.length; k = k + 2){
        var key = array[k][0]
        var words = array[k+1]
        console.log(substitutionDictionary(key))
    }
}
function substitutionDictionary(key){
    var res = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var keyShortened = key.split("").reverse().join("").replace(/(.)(?=.*\1)/g, "").split("").reverse().join("")
    return keyShortened
}
