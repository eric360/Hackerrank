function processData(input) {
    var dictionary_ = dictionary(input.split("\n")[0])
    console.log(dictionary_)
}
function dictionary(word){
    var res = {}
    for(var k = 0; k < word.length; k++){
        if(res[word[k]]){
            res[word[k]] = res[word[k]] + 1
        }
        else{
            res[word[k]] = 1
        }
    }
    return res
}
