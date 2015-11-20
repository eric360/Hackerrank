function processData(input) {
    console.log(check(occurrenceDictionary(letterDictionary(input.split("\n")[0]))))
}
function check(dictionary){
    var keys = Object.keys(dictionary).map(function(item) { return parseInt(item, 10);})
    if(keys.length == 1){
        return "YES"
    }
    else if(keys.length == 2){
        if (dictionary[Math.max(keys[0], keys[1])] == 1){
            if(Math.abs(keys[1]- keys[0]) == 1){
                return "YES"
            }
            return "NO"
        }
        else if (dictionary["1"] == 1){
            return "YES"
        }
        return "NO"
    }
    return "NO"
}
function values(dictionary){
    var res = []
    for(key in dictionary){
        res.push(dictionary[key])
    }
    return res
}
function occurrenceDictionary(dictionary){
    var res = {}
    for(var key in dictionary){
        if(res[dictionary[key]]){
            res[dictionary[key]] = res[dictionary[key]] + 1
        }
        else{
            res[dictionary[key]] = 1
        }
    }
    return res
}
function letterDictionary(word){
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
