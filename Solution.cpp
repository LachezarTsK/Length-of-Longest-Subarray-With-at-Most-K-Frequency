
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
    
public:
    int maxSubarrayLength(const vector<int>& input, int maxFrequency) const {

        int front = 0;
        int back = 0;
        int maxSubarrayLengthWithMaxFrequency = 0;
        unordered_map<int, int> frequency;

        while (front < input.size()) {
            ++frequency[input[front]];

            while (back < front && frequency[input[front]] > maxFrequency) {
                --frequency[input[back]];
                ++back;
            }

            maxSubarrayLengthWithMaxFrequency = max(maxSubarrayLengthWithMaxFrequency, front - back + 1);
            ++front;
        }

        return maxSubarrayLengthWithMaxFrequency;
    }
};
