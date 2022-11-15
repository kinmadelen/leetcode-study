# 387. First Unique Character in a String

https://leetcode.com/problems/first-unique-character-in-a-string/

## TypeScript

### Approach

- 첫 번째 순회할 때 문자열의 각 문자와 문자의 빈도수를 맵에 저장
- 두 번째 순회할 때 ...
  - 각 문자를 맵에서 확인.
  - 만약 빈도수가 `1`이라면 해당 문자가 first unique character이므로 반환한다.
  - 빈도수가 `1`이상이라면, 다음 문자를 계속 확인.
- 순회가 종료 되었으면 unique 문자가 없으므로 `-1`을 반환

### Code

```ts
function firstUniqChar(s: string): number {
  let mp = new Map();

  for (const x of s) {
    if (mp.has(x)) {
      mp.set(x, mp.get(x) + 1);
    } else {
      mp.set(x, 1);
    }
  }

  let index = 0;
  for (const x of s) {
    if (mp.get(x) === 1) return index;
    ++index;
  }

  return -1;
}
```

### Complexity

Time complexity: **O(n)**
