# 412. Fizz Buzz

https://leetcode.com/problems/fizz-buzz/

## Approach

3의 배수일 경우엔 Fizz, 5의 배수일 경우엔 Buzz를 추가한다. <BR>
15처럼 3와 5 두 수 모두의 배수일 경우엔 FizzBuzz를 추가한다.

## Code

```python
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        strList = []
        for i in range(1, n + 1):
            if i % 15 == 0:
                strList.append("FizzBuzz")
            if i % 5 == 0:
                strList.append("Buzz")
            elif i % 3 == 0:
                strList.append("Fizz")
            else:
                strList.append(str(i))
        return strList

```

## Complexity

1부터 n+1번만큼 반복하므로 시간복잡도는 O(N)
