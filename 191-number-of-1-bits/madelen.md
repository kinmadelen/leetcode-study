# 0191. Number of 1 Bits

https://leetcode.com/problems/number-of-1-bits/

## TypeScript

### Approach

perform unsigned right shift until `n` becomes 0 and return the count.

### Code

```ts
function hammingWeight(n: number): number {
  let cnt = 0;
  while (0 !== n) {
    cnt += n & 1;
    n >>>= 1;
  }

  return cnt;
}
```

[찾아보니](https://en.wikipedia.org/wiki/Hamming_weight) 이렇게 하는 방법도 있더라구요.

```ts
function hammingWeight(n: number): number {
  let cnt = 0;
  while (n) {
    n &= n - 1;
    ++cnt;
  }

  return cnt;
}
```

### Complexity

$O(N)$ where `0 <= N <= 32`
