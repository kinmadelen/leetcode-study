# 0169. Majority Element

https://leetcode.com/problems/majority-element/

## TypeScript

### Approach

- 해시맵을 사용해서 빈도수를 계산.
- 해시맵을 순회하면서 `n/2` 이상 나타난 값을 반환한다.

### Code

```ts
function majorityElement(nums: number[]): number {
  let mp: Map<number, number> = new Map();
  for (const x of nums) {
    if (mp.has(x) === true) {
      let v = mp.get(x) || 0;
      mp.set(x, v + 1);
    } else {
      mp.set(x, 1);
    }
  }

  const half = nums.length >> 1;
  let k = 0;
  let v = 0;
  for (const kv of mp) {
    if (kv[1] > half && kv[1] > v) {
      k = kv[0];
      v = kv[1];
    }
  }

  return k;
}
```

혹은 정렬을 한 후에, 가운데 값을 반환하는 방법도 있다. `n/2`이상 나타난 숫자이기 때문에 리스트를 정렬하면, 최대빈도를 가진 데이터가 가운데 오게된다.

```ts
function majorityElement(nums: number[]): number {
  nums = nums.sort();
  let i = nums.length >> 1;
  return nums[i];
}
```

### Complexity

- 해시맵을 사용한 경우 **O(N)**
- 정렬을 사용한 경우 **O(nlogn)**
