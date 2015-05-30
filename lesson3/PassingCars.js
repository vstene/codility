/**
 * Javascript solution to Codility Lesson 3 - Prefix Sums -> PassingCars.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/passing_cars/
 */
function solution(A) {
    var passed = 0, pairs = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            passed += 1;
        } else {
            pairs += passed;
        }

        if (pairs > 1000000000) {
            pairs = -1;

            break;
        }
    }

    return pairs;
}