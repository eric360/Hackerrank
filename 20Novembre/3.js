function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    for(var k = 1; k < array.length; k = k + 2){
        var key = array[k][0]
        var words = array[k+1]
        console.log(substitutionDictionary(key))
    }
}
function substitutionDictionary(key){
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var keyShort = key.split("").reverse().join("").replace(/(.)(?=.*\1)/g, "").split("").reverse().join("")
    var dict = {}
    for(var k = 0; k < keyShort.length; k++){
        dict[keyShort[k]] = ""
    }
    var lettersShort = letters.replace(RegExp(keyShort.split("").join("|"), "g"), "");
    for(var k = 0; k < lettersShort.length; k = k + keyShort.length){
        for(var i = 0; i < keyShort.length; i++){
            if((k + i) <lettersShort.length){
                dict[keyShort[i]] = dict[keyShort[i]] + lettersShort[k + i]
            }
         }
    }
    var  keyShortSort = keyShort.split("").sort().join("")
    var res = ""
    for(var k = 0; k < keyShort.length; k++){
        res += keyShortSort[k]
        res += dict[keyShortSort[k]]
    }
    return res
}
