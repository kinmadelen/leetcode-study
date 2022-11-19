# 326. Power of Three

https://leetcode.com/problems/power-of-three/

## Approach

- n이 0이 될 때까지 나눈 후 나머지가 1이면 true
- 그렇지 않을 경우 false

## Code

```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 1:
            return True

        while n != 0:
            n /= 3
            if n == 1:
                return True
        return False
```

## Complexity

n을 1이 될때까지 나누므로 O(n)
