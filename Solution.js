
/**
 * @param {number[]} input
 * @param {number} maxFrequency
 * @return {number}
 */
var maxSubarrayLength = function (input, maxFrequency) {

    let front = 0;
    let back = 0;
    let maxSubarrayLengthWithMaxFrequency = 0;
    const frequency = new Map();

    while (front < input.length) {
        if (!frequency.has(input[front])) {
            frequency.set(input[front], 1);
        } else {
            frequency.set(input[front], frequency.get(input[front]) + 1);
        }

        while (back < front && frequency.get(input[front]) > maxFrequency) {
            frequency.set(input[back], frequency.get(input[back]) - 1);
            ++back;
        }

        maxSubarrayLengthWithMaxFrequency = Math.max(maxSubarrayLengthWithMaxFrequency, front - back + 1);
        ++front;
    }

    return maxSubarrayLengthWithMaxFrequency;
};
