
using System;

public class Solution
{
    public int MaxSubarrayLength(int[] input, int maxFrequency)
    {
        int front = 0;
        int back = 0;
        int maxSubarrayLengthWithMaxFrequency = 0;
        Dictionary<int, int> frequency = new Dictionary<int, int>();

        while (front < input.Length)
        {
            if (!frequency.ContainsKey(input[front]))
            {
                frequency.Add(input[front], 1);
            }
            else
            {
                ++frequency[input[front]];
            }

            while (back < front && frequency[input[front]] > maxFrequency)
            {
                --frequency[input[back]];
                ++back;
            }

            maxSubarrayLengthWithMaxFrequency = Math.Max(maxSubarrayLengthWithMaxFrequency, front - back + 1);
            ++front;
        }

        return maxSubarrayLengthWithMaxFrequency;
    }
}
