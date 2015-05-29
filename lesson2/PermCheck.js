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