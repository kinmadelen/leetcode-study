# 0344. Reverse String

https://leetcode.com/problems/reverse-string/

## TypeScript

### Approach

- 두 개의 인덱스 (`i`, `j`)를 사용한다.
- `i`는 머리부터, `j`는 꼬리부터 역순으로 순회한다.
- 문자열 중간까지 반복하면서 `i`와 `j`의 문자를 스왑한다.

### Code

```ts
function reverseString(s: string[]): void {
  const len = s.length;
  const bound = len >> 1;

  for (let i = 0; i < bound; ++i) {
    [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]];
  }
}
```

### Time Complexity

문자열 중간까지 순회하기 때문에 **O(N)**.
