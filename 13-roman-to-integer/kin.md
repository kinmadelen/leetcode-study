# 00. Problem

https://leetcode.com/problems/roman-to-integer/

## Approach

이 문제 역시 unordered_map을 사용해서 로마지에 대한 map을 만든 후 그에 따라 입력받은 string에 대해 하나하나 찾는 방식 입니다.

## Code

```cpp
class Solution {
public:
    int romanToInt(string s) {
      unordered_map<char, int> map = {{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};
      int changed = 0;
      for(int idx = 0; idx < s.size(); ++idx) {
        if((idx < s.size() - 1) && (map[s[idx]] < map[s[idx + 1]])) {
          changed -= map[s[idx]];
        }else {
          changed += map[s[idx]];
        }
      }
      return changed;
    }
};
```

## Complexity

s에 대해 하나하나 찾아야하므로 O(N)
