# 26. Remove Duplicates from Sorted Array

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

## Approach

- 초기값 1 부터 시작하여 nums의 길이 동안 이번 차례(i)의 값과 이전 차례(i-1) 값을 비교
- nums배열에 초기화한 값을 넣으며 중복되지 않은 유니크한 원소를 추가
- 만약 다를 경우 초기값 1증가 하여 최종적으로 반환

## Code

```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
      if(nums.size() == 0) return 0;

      int init = 1;
      for(auto i = 1; i < nums.size(); ++i) {
        if(nums[i] != nums[i-1]) {
          nums[init] = nums[i];
          init++;
        }
      }
      return init;
    }
};

```

## Complexity

1부터 N까지 반복하는 과정이므로 입력값이 증가함에 따라 같은 비율로 증가하는 선형복잡도 <br>
O(N)
