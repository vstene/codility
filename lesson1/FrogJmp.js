/**
 * Javascript solution to Codility Lesson 1 - Time Complexity -> FrogJmp.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/frog_jmp/
 */
 function solution(X, Y, D) {
    var length = Y - X;

    return Math.ceil(length / D);
}