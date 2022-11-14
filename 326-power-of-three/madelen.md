# 0326. Power of Three

https://leetcode.com/problems/power-of-three/

## Approach

3의 곱을 반복적으로 계산하면서 `n`보다 작거나 같을때까지 반복한다.

## TypeScript

```ts
function isPowerOfThree(n: number): boolean {
  if (n == 1) return true;
  if (n <= 0) return false;

  let base = 3;
  let val = 1;
  while (val <= n) {
    val *= 3;
    if (val === n) return true;
  }

  return false;
}
```

### Complexity

시간 복잡도는 **O(log_3(n))**이 된다.
