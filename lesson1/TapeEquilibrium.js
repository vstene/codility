/**
 * Javascript solution to codility lesson 1 - Time Complexity -> TapeEquilibrium.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/tape_equilibrium/
 */
 function solution(A) {
    var partA = 0,
        partB = A.reduce(function(prev, curr) { return prev + curr }),
        min = Infinity;

    for (var i = 0; i < A.length - 1; i++) {
        var diff;

        partA += A[i];
        partB -= A[i];

        diff = Math.abs(partA - partB);

        if (diff < min) {
            min = diff;
        }
    }

    return min;
}