# 202. Happy Number

https://leetcode.com/problems/happy-number/

## Approach

- 주어진 숫자에 대해 각 자리수를 제곱해서 더한 숫자를 만든다.
- 만들어진 숫자에 대해 1이 나올 때까지 반복한다.
- 이 과정을 반복하며 1이 도출되면 happy, 아니면 unhappy
- 한 사이클을 돌게 된다면 (같은 숫자가 나오면) 절대 happy number가 될 수 없으므로 해당 규칙을 이용한다.

## Code

```python

class Solution:
    def isHappy(self, n: int) -> bool:
        visited = set()

        while True:
            result = 0
            for x in str(n):
                visited.add(int(x))
                result += int(x) * int(x)

            if result == 1:
                return True
            if result in visited:
                return False
            n = result
```

## Complexity

주어진 숫자를 계속해서 계산해야하므로 O(n)?
