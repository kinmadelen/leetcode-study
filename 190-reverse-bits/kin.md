# 190. Reverse Bits

https://leetcode.com/problems/reverse-bits/

## Approach

- python에서 문자열 순서 뒤집기
  s[::-1]
- python에서 10진수를 2진수 문자열로 바꾸기
  bin(integerValue)
- python에서 2진수 문자열을 십진수 숫자로 바꾸기
  int(stringValue, 2)

## Code

```python
class Solution:
    def reverseBits(self, n: int) -> int:
        s = bin(n)[2:]
        length = 32 - len(s)

        for i in range(length):
            s = "0" + s
        return int(s[::-1], 2)
```

## Complexity

length 32 의 binary string이 주어지기 때문에 O(32 - len(s)) 따라서 O(n)?
