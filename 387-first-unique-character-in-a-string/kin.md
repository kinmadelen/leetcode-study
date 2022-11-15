# 387. First Unique Character in a String

https://leetcode.com/problems/first-unique-character-in-a-string/

## Approach

- `Counter`를 이용해 각 문자의 갯수를 센다.
- 각 문자가 1일 경우 유니크한 문자값이 되므로 그대로 result로 반환
- 그렇지 않을 경우엔 인덱스 값을 1증가시키고 다음 문자를 검증한다.
- 이런 식으로 문자값 끝까지 검증해서 값이 나오지 않을 경우엔 처음 result값으로 선언한 -1이 반환된다.

## Code

```python
class Solution:
    def firstUniqChar(self, s: str) -> int:
        result = -1
        s = list(s)
        count = Counter(s)
        i = 0

        for chr in s:
            if count[chr] == 1:
                result = i
                break
            i = i + 1
        return result

```

## Complexity

문자열을 처음부터 끝까지 검증하므로 O(N)
