# 69. Sqrt(x)
https://leetcode.com/problems/sqrtx

## Approach

## Code
### Method 1: Simple Iteration

```ts
function mySqrt(x: number): number {
    if(x <= 1) return x;
    
    let cnt = 1;
    while(cnt * cnt <= x) {
        cnt += 1;
    }
    
    return cnt-1;
};
```

`sqrt`만큼 반복하기 때문에 시간복잡도는 **O(sqrt N)**

### Method 2: Binary Search
```ts
function mySqrt(x: number): number {
  if (x <= 1) return x;

  let low = 0;
  let high = x;
  let res: number = 0;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);

    if (mid * mid <= x) {
      res = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return res;
}
```

Binary search를 사용해서 검색하는 범위가 매번 반으로 줄어들기 때문에 시간복잡도는 **O(logn)**
