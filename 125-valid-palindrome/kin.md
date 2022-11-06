# 125. Valid Palindrome

<https://leetcode.com/problems/valid-palindrome/>

## Approach

거꾸로 나열해도 배열이 같은 문자일 경우 true 반환 <br>

- python의 join 함수 : 문자열을 합쳐줌
- python의 isalnum: 문자면 true return, 아니면 false return
- [::-1]: 역순으로 처음부터 끝까지 -1칸씩 이동
  위의 함수들을 통해 문자열을 비교

## Code

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        str1 = ''.join(filter(str.isalnum, s)).lower()
        str2 = ''.join(filter(str.isalnum, s)).lower()[::-1]
        return str1 == str2
```

## Complexity

각 문자열을 하나하나 비교하므로 시간복잡도는 O(N)
