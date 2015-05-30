/**
 * Javascript solution to Codility Lesson 2 - Counting Elements -> PermCheck.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/perm_check/
 */
 function solution(A) {
    var count = [], permutation = 1;

    A.forEach(function(value) {
        count[value] = 1;
    });

    for (var i = 1; i <= A.length; i++) {
        if (count[i] === undefined) {
            permutation = 0;

            break;
        }
    }

    return permutation;
}