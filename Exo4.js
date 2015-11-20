function processData(input) {
    var array = input.split("\n")
    for (var k = 1; k < array.length; k++) {
        var word = array[k]
        console.log(anagramsWithWord(word))
    }
}
function anagramsWithWord(word){
   return anagramsWithMatrix(matrixWithWord(word))
}
function matrixWithWord(word){
    var res = []
    for(var l = 1; l < word.length; l++){
        var temp = []
        for(var i = 0; i + l - 1 < word.length; i++){
            temp.push(word.substring(i, i+l))
        }
        res.push(temp)
    }
    return res
}
function anagramsWithMatrix(matrix){
    var res = 0
    for(var i = 0; i < matrix.length; i++){
       var line = matrix[i]
       res += anagramsWithLine(line)
    }
    return res
}
function anagramsWithLine(line){
    var dictionary = {}
    for(var i = 0; i  < line.length; i++){
        var word = line[i]
        var sortedWord = word.split("").sort().join("")
       if(dictionary[sortedWord] == undefined){
           dictionary[sortedWord] = 1
       }
        else{
            dictionary[sortedWord] += 1
        }
    }
    return anagramsWithDictionary(dictionary)
}
function anagramsWithDictionary(dictionary){
    var res = 0
    for(var key in dictionary) {
          res += combinaisons(2,dictionary[key]);
    }
    return res
}
function combinaisons(k,n){
    if(k >n){
        return 0
    }
    else{
        return factorielle(n) /(factorielle(k) *factorielle(n-k) )
    }
}
function factorielle(n)
{
    if (n == 0) {
         return 1;
    }
    else {
         return n * factorielle (n-1);
    }
}
