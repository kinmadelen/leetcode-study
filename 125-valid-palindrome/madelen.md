# 125. Valid Palindrome

https://leetcode.com/problems/valid-palindrome

### Approach

```text
isPalindrome(s) -> boolean
    Pre: s is a string to be tested whether it's a palindrome or not
    Post: s is either palindrome or not

    s   ← removeNonAlphanumeric(s)
    len ← s.length

    FOR (i=0 to len/2)
        IF (s[i] != s[len-i-1])
            return false
        END IF
    END FOR

    return true
END isPalindrome
```

### Code

```ts
function removeNonAlphaneumeric(s: string): string {
  const len = s.length;
  let str = '';

  const LOWER = (ch: string): boolean => ch >= 'a' && ch <= 'z';
  const UPPER = (ch: string): boolean => ch >= 'A' && ch <= 'Z';
  const NUMERIC = (ch: string): boolean => ch >= '0' && ch <= '9';

  for (let i = 0; i < len; ++i) {
    if (UPPER(s[i])) {
      str += s[i].toLocaleLowerCase();
    } else if (LOWER(s[i]) || NUMERIC(s[i])) {
      str += s[i];
    }
  }
  return str;
}

function isPalindrome(s: string): boolean {
  s = removeNonAlphaneumeric(s);
  const len = s.length;
  const bound = len >> 1;
  for (let i = 0; i <= bound; ++i) {
    if (s[i] !== s[len - i - 1]) return false;
  }
  return true;
}
```

### Complexity

#### Time complexity

- `removeNonAlphanemuric` 함수에서 **O(N)**
- `isPalindrome` 함수에서 **O(N/2)**
- 최종 시간복잡도는 **O(N)**

#### Space Complexity

- 문자열을 새로 만들기 때문에 **O(S)**, `S = 문자열 길이`가 될 것 같다.
