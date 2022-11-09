# 0217. Contains Duplicate

https://leetcode.com/problems/contains-duplicate/

## Approach

set을 사용하여 해당 값의 존재 여부를 확인한다. 이미 존재하는 값이면 중복된 값이므로 `true`를 반환한다. 마지막까지 중복된 값이 없으면 `false`를 반환한다.

## TypeScript

### Code

```ts
function containsDuplicate(nums: number[]): boolean {
  let set = new Set();
  for (const x of nums) {
    if (set.has(x)) return true;
    set.add(x);
  }

  return false;
}
```

### Complexity

`set.has()`의 시간복잡도가 O(1)이라고 했을 때, 이 풀이의 시간복잡도는 **O(N)**이 된다.
