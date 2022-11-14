# 0268. Missing Number

https://leetcode.com/problems/missing-number/

## Approach

`0`부터 `n`까지의 합을 구한 다음 배열의 값들을 빼주면? 마지막 남은 값이 missing number가 된다.

## TypeScript

```ts
function missingNumber(nums: number[]): number {
  const n = nums.length;
  let missing = (n * (n + 1)) / 2;

  for (const x of nums) {
    missing -= x;
  }

  return missing;
}
```

## Complexity

Time complexity: **O(n)**

Space complexity: **O(1)**
