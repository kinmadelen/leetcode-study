# 1. Two Sum

https://leetcode.com/problems/two-sum/

## Approach

unordered_map이라는 것을 알게 되어서 사용해보았습니다. <br>
unordered 가 붙은 대로 정렬되지 않은 key가 value가 mapping된 형태롤 unordered_map이라고 하는데, 여기에 답에 부합하는 계산 식을 넣어 리턴하는 방식입니다.

## Code

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
      unordered_map<int, int> map;
      for(int i = 0; i < nums.size(); ++i) {
        if(map.find(target - nums[i]) != map.end()) {
          return {map[target - nums[i]], i};
        }
      map.insert({nums[i], i});
      }
      return {};
    }
};
```

## Complexity

배열의 각 요소들을 전부 찾아보아야하기 때문에 runtime 복잡도는 O(N)
