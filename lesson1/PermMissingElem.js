/**
 * Javascript solution to codility lesson 1 - Time Complexity -> PermMissingElem.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/perm_missing_elem/
 */
 function solution(A) {
    var n = A.length + 1,
        sumA = n * (n + 1) / 2,
        sumB = A.reduce(function(prev, curr) { return prev + curr }, 0);

    return sumA - sumB;
}