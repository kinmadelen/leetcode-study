# 00. Problem

https://leetcode.com/problems/sqrtx/

## Approach

## Code

```cpp
class Solution {
public:
    int mySqrt(int x) {
      int low = 0, high = x, mid;
      if(x < 2) return x; // mid가 0이 되면 안되므로
      while(low < high) {
        // low와 high의 중간값을 구한다.
        mid = (low + high)/2;
        // x/mid가 mid보다 크면 low의 값을 증가시킨다.
        if(x/mid >= mid) {
          low = mid + 1;
          // 그렇지 않은 경우엔 high를 mid값으로 낮춘다.
        }else {
          high = mid;
        }
        // 이렇게 low가 high를 추월하지 않는 동안 반복한다.
      }
      // 그렇게 찾은 가장 높은 값의 -1 (0부터 시작했으므로)이 제곱근이다.
      return high - 1;


    }
};
```

## Complexity

binary search를 통해 찾았기 때문에 O(logN) (여기서 N은 x)
