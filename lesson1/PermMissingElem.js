function solution(A) {
    var n = A.length + 1,
        sumA = n * (n + 1) / 2,
        sumB = A.reduce(function(prev, curr) { return prev + curr }, 0);

    return sumA - sumB;
}