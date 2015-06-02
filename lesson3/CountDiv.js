/**
 * Javascript solution to Codility Lesson 3 - Prefix Sums -> Count Div.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/count_div/
 */
function solution(A, B, K) {
    var offset = A % K === 0 ? 1 : 0;

    return Math.floor(B/K) - Math.floor(A/K) + offset;
}