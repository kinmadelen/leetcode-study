# 66. Plus One

https://leetcode.com/problems/plus-one/

## Approach

디지털 숫자를 구현하기. <br>
[9, 9] 인 경우가 어려웠다. <br>

때문에 vector 의 `push_back`을 사용해 가장 마지막 원소를 0으로 초기화 시켰다. <br>
push_back은 insert와 다르게 단순 삽입이 아니라 원소를 생성하면서 값을 wrtie하기 때문에 <br>
아예 새로운 원소를 추가할 때 사용할 수 있다. <br>
insert의 경우엔 존재하는 값에만 write할 수 있다.

## Code

```cpp
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
      for(int i = digits.size() - 1; i >= 0; i--) {
        if(digits[i] < 9) {
          // 9미만일 경우엔 그냥 1을 더한다.
          digits[i]++;
          return digits;
        }else {
          // 그렇지 않을 경우엔 0을 넣는다.
          digits[i] = 0;
        }
      }
        digits.push_back(0);
        digits[0] = 1;
        return digits;
    }
};
```

## Complexity

digits.size() 만큼 for문을 돌며 하나하나 확인하기 때문에 digits.size()를 N으로 보았을 때 <br>
시간 복잡도는 O(N)
