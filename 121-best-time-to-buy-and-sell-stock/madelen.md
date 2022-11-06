# 121. Best Time to Buy and Sell Stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

## Approach

DP는 어려워.. 대충 써야겠다는 것 까지는 파악했지만 뭘 해야할지 몰라서 풀이를 찾아봤다.

- 리스트를 순회하면서 최솟값을 갱신한다.
- 리스트를 순회하면서 최댓값을 갱신한다.
  - `i`번째 값 - 최솟값이 현재 최댓값보다 크면 갱신.
- 최댓값을 반환.

## TypeScript

```ts
function maxProfit(prices: number[]): number {
  let maxp = 0;
  let minp = prices[0];
  const len = prices.length;

  for (let i = 1; i < len; ++i) {
    minp = Math.min(minp, prices[i]);
    maxp = Math.max(maxp, prices[i] - minp);
  }

  return maxp;
}
```

## Time Complexity

리스트를 한 번 순회하기 때문에 **O(N)**
