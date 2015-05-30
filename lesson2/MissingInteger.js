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