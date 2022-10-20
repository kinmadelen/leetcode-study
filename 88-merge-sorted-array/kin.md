# 88. Merge Sorted Array

https://leetcode.com/problems/merge-sorted-array/

## Approach

nums1 에 0이 들어가있었기 때문에 맨 앞부터 nums2와 비교하며 새로운 vector를 만들었다.

## Code

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
      if(n == 0) return;

      // merge를 위한 dump vector
      vector<int> mergedList;
      int index1 = 0, index2 = 0;

      while(index1 < m || index2 < n) {
      // 각 nums들이 m 과 n의 길이이기 때문에 index를 그만큼만 증가시키도록 만든다.
        if(index1 < m && index2 < n) {
          if(nums1[index1] <= nums2[index2]) {
            // 둘을 비교해서 더 작은 쪽을 넣고 (앞쪽부터 채워나감)
            mergedList.push_back(nums1[index1]);
            // 작은 쪽의 index를 증가시켜 다음 원소와 비교할 수 있도록 만든다.
            ++index1;
          }else {
            mergedList.push_back(nums2[index2]);
            ++index2;
          }
        }else if(index1 < m) {
          // nums1만 남은 상황
          mergedList.push_back(nums1[index1]);
          ++index1;
        }else if(index2 < n) {
          // nums2만 남은 상황
          mergedList.push_back(nums2[index2]);
          ++index2;
        }
      }

      for(int i = 0; i < m+n; i++) {
        nums1[i] = mergedList[i];
      }

    }

};
```

## Complexity

m 혹은 n의 길이만큼 while문이 돌아가기 때문에 <br>
시간 복잡도는 O(max(m, n))
