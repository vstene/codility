/**
 * Javascript solution to codility lesson 2 - Counting Elements -> MaxCounters.
 * Score: 100/100
 * https://codility.com/demo/take-sample-test/max_counters/
 */
 function solution(N, A) {
    var max = 0, lastMax = 0, counter = [], i, number, index;

    for (i = 0; i < N; i++) {
        counter[i] = max;
    }

    for (i = 0; i < A.length; i++) {
        number = A[i];
        index = number - 1;

        if (number <= N) {
            if (counter[index] < max) {
                counter[index] = max;
            }

            counter[index] += 1;

            if (counter[index] > lastMax) {
                lastMax = counter[index];
            }
        } else {
            max = lastMax;
        }
    }

    for(i = 0; i < counter.length; i++) {
        if (counter[i] < max) {
            counter[i] = max;
        }
    }

    return counter;
}