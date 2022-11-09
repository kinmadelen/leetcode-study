# 191. Number of 1 Bits

https://leetcode.com/problems/number-of-1-bits/

## Approach

- 1을 COUNT!
- python의 bin(number)는 number를 binary(2진수) 문자열로 바꾼다.
- 이후 1을 count한다.

## Code

```python

# 그냥 str 로 바꾼 다음에 1을 카운트 해도 되지 않을까 하니 에러가 난다.
# 아래는 에러가 나는 case
class Solution:
    def hammingWeight(self, n: int) -> int:
        return str(n).count('1')

# 왜 2진수로 바꾼 후 1을 count해야하는지 아직도 모르겠다.
# 아래는 통과하는 case

class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count('1')
```

## Complexity

count는 시간복잡도가 O(n)이 연산이므로 해당 solution의 시간복잡도는 O(n)
