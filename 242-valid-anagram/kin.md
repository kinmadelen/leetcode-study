# 242. Valid Anagram

https://leetcode.com/problems/valid-anagram/

## Approach

- 우선 길이가 다른 것에 대한 유효성검사
- 이후엔 정렬한 이후의 유효성검사
-

## Code

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        if sorted(s) == sorted(t):
            return True
        else:
            return False
```

## Complexity

python에서 len의 time complexity 는 O(1)
sort는 O(N log N) 이라고 한다.
