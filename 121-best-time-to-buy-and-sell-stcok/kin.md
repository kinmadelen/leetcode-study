# 121. Best Time to Buy and Sell Stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

## Approach

주식의 최저점 ~ 최고점을 찾아서 최대의 수익(profix)을 낸다.<br>
계속 하안가를 향해가면 수익을 낼 수 없어 profitdms 0이 된다.> profit의 최초 선언 값은 0이 되어야한다.<br>
문제에서 주식의 최대값은 10000이므로 주식의 min_price를 10000으로 설정해 그보다 낮은 값일 경우 swap 하도록 한다.

## Code

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = 10000 # 임의의 최저 주식값
        profit = 0 # 수익

        for current_price in prices:
            # 현재가격 - 최저값의 값과 수익 값 중 최대값을 수익값으로 보고 swap
            min_price = min(current_price, min_price)
            profit = max(profit, current_price - min_price)
        return profit

```

`

## Complexity

카데인 알고리즘을 사용하므로 시간 복잡도는 O(N)

## Reference

### Kadane's Algorithm

복잡하게 반복해야하는 문제를 여러개로 나눈 후, 그 문제들을 매번 반복하지 않고 그 값을 저장해두었다가 재사용하는 기법인 Dynamic Programming.<br>
[카데인 알고리즘
](https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d)은 이런 DP 기법 중 하나이다.
보통 최대 부분 합을 구할 때 사용한다.
