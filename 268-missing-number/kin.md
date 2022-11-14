# 268. Missing Number

https://leetcode.com/problems/missing-number/

## Approach

- 정렬한 숫자와 인덱스를 비교한다.
- 정렬한 숫자와 인덱스가 다를 경우 해당 인덱스에 숫자가 빠진 형태

## Code

```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        if(len(nums) == 0):
            return 0
        nums.sort()

        for i in range(len(nums)):
            if (i != nums[i]):
                return i
        return len(nums)

```

## Complexity

sort를 사용하기 때문에 O(N)
