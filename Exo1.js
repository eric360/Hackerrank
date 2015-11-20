// Anagram
// https://www.hackerrank.com/challenges/anagram/copy-from/13890077
console.log("Test")
function processData(input) {
    var array = input.split("\n")
    for (var i = 1; i < array.length; i++) {
        var words = array[i]
        if(isEven(words.length)){
            var word2 =  words.slice(0, words.length/2)
            var word1 =  words.slice(words.length/2,words.length)
            console.log(distanceWithDictionaries(dictionaryFromWord(word1),dictionaryFromWord(word2)))
        }
        else{
            console.log(-1)
        }
    }
}
function isEven(n) {
  return n == parseFloat(n)? !(n%2) : void 0;
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
