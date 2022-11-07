# 169. Majority Element

https://leetcode.com/problems/majority-element/

## Approach

- nums에 대한 set 값을 하나 만든다.
- set인 key값과 동일한 원소를 카운트하여 그게 nums의 len/2를 했을 때 보다 클 경우 해당 key값은 answer이 된다.
- 동일한 원소가 2개이상이면 반드시 len(nums)/2보다 큰값을 가지게 된다.

## Code

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        keys = set(nums)
        answer = 0

        for key in keys:
            if nums.count(key) > len(nums) / 2:
                answer = key
                break
        return answer
```

## Complexity

nums의 중복을 줄였다하여도 그에 대한 set 만큼 돌아야하므로 O(keys)
