function processData(input) {
    var array = input.split("\n")
    for (var k = 1; k < array.length; k++) {
        var word = array[k]
        var res = 0
        var substrings = substringsWithWord(word)
        for(var i = 0; i < substrings.length; i++){
            var substring = substrings[i]
            res += numberOfAnagramsWithList(substring)
        }
        console.log(res)
    }
}

function numberOfAnagramsWithList(stack) {
    var res = 0
    while(stack.length > 1){
        var numberOfMatch = 1
        var toSplice = [0]
        var word1 = stack[0]
        for(var i = 1; i < stack.length; i++){
            var word2 = stack[i]
            if(areAnagramWithWords(word1,word2)){
                numberOfMatch += 1
                toSplice.push(i)
            }
        }
        for(var i = 0; i < toSplice.length; i++){
            stack.splice(toSplice[i],1)
        }
        res += combinaison(2,numberOfMatch)
    }
    return res
}
function combinaison(k,n){
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
function substringsWithWord(word) {
    res = []
    for(var l = 1; l < word.length; l++){
        temp = []
        for(var k = 0; k+l <= word.length; k++){
             temp.push(word.slice(k,k+l))
        }
        res.push(temp)
    }
    return res
}
function areAnagramWithWords(word1,word2) {
    var dict1 = dictionaryFromWord(word1)
    var dict2 = dictionaryFromWord(word2)
     if(distanceWithDictionaries(dict1,dict2) == 0){
         return true
     }
    else{
        return false
    }
}
function dictionaryFromWord(word) {
    var res = {};
    for (var i = 0; i < word.length; i++) {
        var key =  word[i]
        if(res[key]){
            res[key] = res[key] + 1
        }
        else{
            res[key] = 1
        }
    }
    return res
}
function distanceWithDictionaries(dict1,dict2) {
    var res = 0
    for (var key in dict1) {
      if (dict2[key]) {
        res += Math.max(dict1[key] - dict2[key],0)
      }
      else{
       res += dict1[key]
      }
    }
    return res
}
