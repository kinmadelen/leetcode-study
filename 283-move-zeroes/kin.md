# 283. Move Zeroes

https://leetcode.com/problems/move-zeroes/

## Approach

- 차례로 0 이 아닌 수를 찾는다.
- 0 이 아닐 경우 앞 index와 자리를 바꾼다.

## Code

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        i = 0
        for j in range(len(nums)):
            if nums[j] != 0:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
```

## Complexity

num를 차례로 loop하기 때문에 O(N)
