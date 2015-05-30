/**
 * Javascript solution to Codility Lesson 2 - Counting Elements -> FrogRiverOne.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/frog_river_one/
 */
 function solution(X, A) {
    var sum = 0, count = [], jump = -1;

    for(var i = 0; i <= A.length; i++) {
        if (A[i] <= X && !count[A[i]]) {
            count[A[i]] = true;

            sum += 1;
        }

        if (sum === X) {
            jump = i;

            break;
        }
    }
    return jump;
}