# 250. Intersection of Two Arrays 2

https://leetcode.com/problems/intersection-of-two-arrays-ii/

## Approach

단순히 동일한 값만 찾으면 중복으로 값이 들어가기 때문에 `dict(Counter(num))` 를 통해 <br>
각 원소가 몇개씩 있는지 dictionary형태로 만듦<br>
아래는 예시<br>

<img width="248" alt="image" src="https://user-images.githubusercontent.com/48708746/201667761-0acec78b-850f-41fd-8653-8c69beb10ff0.png">

## Code

```python
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []
        count = dict(Counter(nums1))

        for num in nums2:
            if num in count and count[num] != 0:
                result.append(num)
                count[num] = count[num] - 1
        return result
```

## Complexity

nums2를 loop 하기 때문에 O(n)
