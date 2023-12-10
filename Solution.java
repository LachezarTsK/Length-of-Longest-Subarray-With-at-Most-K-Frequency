
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public int maxSubarrayLength(int[] input, int maxFrequency) {

        int front = 0;
        int back = 0;
        int maxSubarrayLengthWithMaxFrequency = 0;
        Map<Integer, Integer> frequency = new HashMap<>();

        while (front < input.length) {
            frequency.put(input[front], frequency.getOrDefault(input[front], 0) + 1);

            while (back < front && frequency.get(input[front]) > maxFrequency) {
                frequency.put(input[back], frequency.get(input[back]) - 1);
                ++back;
            }

            maxSubarrayLengthWithMaxFrequency = Math.max(maxSubarrayLengthWithMaxFrequency, front - back + 1);
            ++front;
        }

        return maxSubarrayLengthWithMaxFrequency;
    }
}
