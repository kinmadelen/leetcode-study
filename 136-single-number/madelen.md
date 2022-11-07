# 136. Single Number

https://leetcode.com/problems/single-number/

## TypeScript

### Approach

- 해시맵을 사용해서 빈도수를 계산
- 마지막에 한 번 나타난 값을 반환

### Code

```ts
function singleNumber(nums: number[]): number {
  let mp: Map<number, number> = new Map();
  for (const x of nums) {
    if (mp.has(x) === true) {
      let v = mp.get(x) || 0;
      mp.set(x, v + 1);
    } else {
      mp.set(x, 1);
    }
  }

  for (const kv of mp) {
    if (kv[1] === 1) return kv[0];
  }

  return -1;
}
```

### Complexity

해시맵의 룩업은 O(1)이고 한 번 씩 순회하기 때문에 시간복잡도는 **O(N)**.
