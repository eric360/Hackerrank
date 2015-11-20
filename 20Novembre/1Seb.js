function processData(input) {
    input = input.split("\n");
    var T = parseInt(input[0], 10), i, k, n, arr;
    for (i = 0; i < T; ++i) {
        n = parseInt(input[1 + 2*i], 10);
        arr = input[2*i + 2].split(" ");
        for (k = 0; k < n; ++k) {
            arr[k] = parseInt(arr[k], 10);
        }
        solve(arr, n);
    }
}
var solve = function (arr, n) {
    var left = 0,
        right = sum(arr, n),
        i;
    if (left === right) {
        console.log("YES");
        return;
    }
    for (i = 1; i < n; ++i) {
        left += arr[i - 1];
        right -= arr[i];
        if (left === right) {
            console.log("YES");
            return;
        }
    }
    console.log("NO");
};
var sum = function (arr, n) {
    var res = 0, i;
    for (i = 1; i < n; ++i) {
        res += arr[i];
    }
    return res;
};
