# 217. Contains Duplicate

https://leetcode.com/problems/contains-duplicate/

## Approach

- set 을 이용해 중복을 제거한 list를 만든다.
- set으로 중복을 제거한 list와 원래 list간의 길이를 비교한다.
- 길이가 다르면 중복이 제거된 상태가 되므로 True

## Code

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        distinct_array = set(nums)
        if(len(nums) != len(distinct_array)):
            return True
        else:
            return False

```

## Complexity

set은 새로 생성되는 집합 요소 개수에 비례하는 시간복잡도를 가지므로 O(len(n)) 따라서 O(N)
