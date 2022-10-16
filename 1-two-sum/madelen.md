# 1. Two Sum

https://leetcode.com/problems/two-sum/

## Approach

가장 간단한 방법으로는 이중 반복문을 사용해서 모든 값을 확인하는 것 = 브루트포스.

또 다른 방법은 해시맵을 사용하는 방법이 있다.

## Bruteforce

```ts
function twoSum(nums: number[], target: number): number[] {
  const SIZE = nums.length;
  let i = 0;
  let j = 0;

  loop: for (; i < SIZE - 1; ++i) {
    for (j = i + 1; j < SIZE; ++j) {
      if (nums[i] + nums[j] === target) {
        break loop;
      }
    }
  }

  return [i, j];
}
```

시간복잡도는 O(n^2)가 된다 (`n = nums.length`).

## HashMap

```ts
function twoSum(nums: number[], target: number): number[] {
  let mp = new HashMap<number, number>();
  const SIZE = nums.length;

  for (let i = 0; i < SIZE + 1; ++i) {
    let v = mp.get(nums[i]);
    if (v !== undefined) {
      return [v, i];
    }
    mp.set(target - nums[i], i);
  }

  return [];
}
```

브라우저 엔진에 따라 내부 구현이 다른 것 같다.
HashMap을 사용한 경우 get/set은 O(1)이기에 최종 시간 복잡도는 O(n) (`n = nums.length`).

만약 내부적으로 트리를 사용했다면 get/set은 O(logn)이므로 최종 시간 복잡도는 O(n\*logn)이 될 것 같다.

> The specification requires maps to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

ref: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
