function processData(input) {
    //Enter your code here
    var array = input.split("\n")
    var encodedString = array[1]
    var parsedFirstLine = array[0].split(" ").map(function (x) {return parseInt(x, 10);})
    var N = parsedFirstLine[0]
    var K = parsedFirstLine[1]
    console.log( uncodeString(encodedString,N,K))
}
function uncodeString(encodedString,N,K){
    var currentResult = []
    var length = encodedString.length
    for(var i = 0; i < length; i++){
        if(i < K - 1){
           var l = i + 1
           console.log(l)
        }
        else if( K - 1 <= i && i < N){
           var l = K
           console.log(l)
        }
        else if( N <= i && i < length){
           var l = K - (i - N + 1)
           console.log(l)
        }
    }
    return currentResult
}
function intXOR(a,b) {
  var test = XOR(a,b)
  if(test){
      return 1
  }
  else{
      return 0
  }
}
function XOR(a,b) {
  return ( a || b ) && !( a && b );
}

//TEST
/*
function processData(input) {
    //Enter your code here
    var array = input.split("\n")
    var string = array[1].split("").map(function (x) {return parseInt(x, 10);})
    var data = array[0].split(" ").map(function (x) {return parseInt(x, 10);})
    var N = data[0]
    var K = data[1]
    console.log( uncodeString(string,N,K))
     console.log( matrix(N,K))
}
function uncodeString(encodedString,N,K){
    var currentRes = []
    var length = encodedString.length
    for(var i = 0; i < length; i++){
        var value = encodedString[i]
        if(i == 0){
            currentRes.push(value)
        }
        else if(i < K - 1){
           var l = i + 1
        }
        else if( K - 1 <= i && i < N){
           var l = K
        }
        else if( N <= i && i < length){
           var l = K - (i - N + 1)
        }
    }
    return currentRes
}
function updateMatrix(matrix,value,i){



}
function matrix(N,K) {
    var res =[]
    for(var k = 0; k <= K-1; k++){
        console.log(k)
        res.push(line(N,K))
    }
    return res
}
function line(N,K) {
    var res =[]
    for(var n = 0; n < K + N-1; n++){
        res.push(-1)
    }
    return res
}
function intXOR(a,b) {
  var test = XOR(a,b)
  if(test){
      return 1
  }
  else{
      return 0
  }
}
function XOR(a,b) {
  return ( a || b ) && !( a && b );
}
*/
function processData(input) {
    //Enter your code here
    var array = input.split("\n")
    var string = array[1].split("").map(function (x) {return parseInt(x, 10);})
    var data = array[0].split(" ").map(function (x) {return parseInt(x, 10);})
    var N = data[0]
    var K = data[1]
   console.log(uncodeString(string,N,K).join(""))
}
function uncodeString(encodedString,N,K){
    var res = []
    res = [encodedString[0]]
    for(var i = 1; i < N; i++){
        var x = currentValue(res,K - 1)
        var z = encodedString[i]
        res.push(XORInverse(x,z ))
    }
    return res
}
function XORInverse(x,z) {
    if(x == 0 && z == 0){
        return 0
    }
    else if(x == 0 && z == 1){
        return 1
    }
    else if(x == 1 && z == 1){
         return 0
    }
    else if(x == 1 && z == 0){
         return 1
    }
}

function currentValue(list,K) {
    if(list.length == 1){
        return list[0]
    }
    else if(list.length <= K){
       return intXORList(list)
   }
   else{
       return intXORList(list.slice(list.length - K,list.length ))
   }
}
function intXORList(list) {
    var res = intXOR(list[0],list[1])
    for(i = 2; i<list.length; i++){
        res = intXOR(res,list[i])
    }
    return res
}
function intXOR(a,b) {
  var test = XOR(a,b)
  if(test){
      return 1
  }
  else{
      return 0
  }
}
function XOR(a,b) {
  return ( a || b ) && !( a && b );
}
// Final 0.31s
function processData(input) {
    var array = input.split("\n")
    var string = array[1]
    var N = array[0].split(" ").map(function (x) {return parseInt(x, 10);})[0]
    var K = array[0].split(" ").map(function (x) {return parseInt(x, 10);})[1]
    var res = [string[0]]
    var sum = res[0]
    for(var i = 1; i < N; i++){
        if(i >= K){
            sum = sum ^ res[i-K]
        }
        res.push(string[i] ^ sum)
        sum = sum ^ res[i]
    }
    console.log(res.join(""))
}
// Final 0.32s
function processData(input) {
    var array = input.split("\n")
    var string = array[1]
    var N = array[0].split(" ").map(function (x) {return parseInt(x, 10);})[0]
    var K = array[0].split(" ").map(function (x) {return parseInt(x, 10);})[1]
    var res = [string[0]]
    var sum = res[0]
    for(var i = 1; i < N; i++){
         if(i >= K){
             res.push(string[i] ^ string[i-1] ^ res[i-K])
         }
        else{
             res.push(string[i] ^ string[i-1] )
        }
    }
    console.log(res.join(""))
}
