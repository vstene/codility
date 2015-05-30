/**
 * Javascript solution to codility lesson 2 - Counting Elements -> MissingInteger.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/missing_integer/
 */
 function solution(A) {
    var count = {}, mpi = A.length + 1;

    A.forEach(function(number) {
        if (number > 0) {
            count[number] = true;
        }
    });

    for(var i = 1; i<= A.length; i++) {
        if (!count[i]) {
            mpi = i;

            break;
        }
    }

    return mpi;
}