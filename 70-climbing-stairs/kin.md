# 70. Climbing Stairs

https://leetcode.com/problems/climbing-stairs/

## Approach

피보나치 수열을 생각했는데 그렇게 되면 시간복잡도가 어마어마하게 커질 것 같아 다른 방법을 찾아보았습니다. <br>
어떤 사람이 풀 풀이중에 DP(Dynamic programming: 동적계획법)을 사용해 푼 것을 찾았습니다. <br>

## Code

```cpp
class Solution {
public:
    int climbStairs(int n) {
      if(n == 1) {
        return 1;
      }else if(n == 2){
        return 2;
      }else {
        int dp[n+1];
        dp[1] = 1;
        dp[2] = 2;

        for(int i = 3; i <= n; ++i) {
          dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
      }

    }
};
```

## Complexity

동적계획법이기 때문에 O(N)
