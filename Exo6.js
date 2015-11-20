function processData(input) {
var array = input.split("\n")
    for (var k = 1; k < array.length; k++) {
        var line = array[k].split(" ").map(function (x) {return parseInt(x, 10);})
        var a = line[0]
        var b = line[1]
        var n = line[2]
        console.log( fibo(a,b,n))
    }
}
function fibo(a,b,k){
    if(k == 0){
        return a
    }
    else if(k == 1){
        return b
    }
    else {
        return (fib(k-1)*a+fib(k)*b) % (Math.pow(10, 9)+7)
    }
}
var mem = {}
function fib(k){
    if(k == 0){
        return 0
    }
    else if(k == 1){
        return 1
    }
    else {
        if(k % 2 == 0){
            if(typeof mem[k/2-1] ==="undefined"){
                mem[k/2-1]  = fib(k/2-1)
            }
            if(typeof mem[k/2]==="undefined"){
                mem[k/2]  = fib(k/2)
            }
            var temp1 =  mem[k/2-1]
            var temp2 = mem[k/2]
            return ((2*temp1+temp2)*temp2 )
        }else{
            if(typeof mem[(k+1)/2-1] ==="undefined"){
                mem[(k+1)/2-1]  = fib((k+1)/2-1)
            }
            if(typeof mem[(k+1)/2] ==="undefined"){
                mem[(k+1)/2]  = fib((k+1)/2)
            }
            var temp1 = mem[(k+1)/2-1]
            var temp2 = mem[(k+1)/2]
            return (Math.pow(temp1, 2)+Math.pow(temp2, 2))
        }
    }
}
