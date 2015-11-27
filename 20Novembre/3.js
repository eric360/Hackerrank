function processData(input) {
    var array = input.split("\n").map(function (x) {return x.split(" ");})
    for(var k = 1; k < array.length; k = k + 2){
        var key = array[k][0]
        var words = array[k+1]
        console.log(decode(words,substitutionDictionary(key)).join(' '))
    }
}
function decode(array,dict){
    var res = []
    for(var k = 0; k < array.length; k++){
        var word = array[k]
        res.push(decodeWord(word,dict))
    }
    return res
}
function decodeWord(word,dict){
    var res = ""
    for(var k = 0; k < word.length; k++){
        res += dict[word[k]]
    }
    return res
}
function substitutionDictionary(key){
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var keyShort = key.split("").reverse().join("").replace(/(.)(?=.*\1)/g, "").split("").reverse().join("")
    var columns = {}
    for(var k = 0; k < keyShort.length; k++){
        columns[keyShort[k]] = ""
    }
    var lettersShort = letters.replace(RegExp(keyShort.split("").join("|"), "g"), "");
    for(var k = 0; k < lettersShort.length; k = k + keyShort.length){
        for(var i = 0; i < keyShort.length; i++){
            if((k + i) <lettersShort.length){
                columns[keyShort[i]] += lettersShort[k + i]
            }
         }
    }
    var  keyShortSort = keyShort.split("").sort().join("")
    var lettersNew = ""
    for(var k = 0; k < keyShort.length; k++){
        lettersNew += keyShortSort[k]
        lettersNew += columns[keyShortSort[k]]
    }
    var dict = {}
    for(var k = 0; k < lettersNew.length; k++){
        dict[lettersNew[k]] = letters[k]
    }
    return dict
}
