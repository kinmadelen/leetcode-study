# 88. Merge Sorted Array
https://leetcode.com/problems/merge-sorted-array

## Code
### Method 1
처음 문제를 봤을 때 딱 떠오른 방법. 그냥 단순히 두 리스트를 머지하는 것 처럼 비교하고 새로운 배열에 하나하나 추가한다. 그리고 마지막에 `nums1`에 덮어씌운다.

in-place라고 했으니... 반칙일수도..
```ts
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  let pos = 0;
  let res: number[] = new Array(m + n);

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      res[pos] = nums1[i];
      ++i;
    } else {
      res[pos] = nums2[j];
      ++j;
    }
    ++pos;
  }

  while (i < m) {
    res[pos++] = nums1[i++];
  }

  while (j < n) {
    res[pos++] = nums2[j++];
  }

  for (let i = 0; i < n + m; ++i) {
    nums1[i] = res[i];
  }
}
```

- 시간 복잡도: **O(m+n)**
- 공간 복잡도: **O(m+n)**

### Method 2: In-place
```ts
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let pos = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[pos--] = nums1[i--];
    } else {
      nums1[pos--] = nums2[j--];
    }
  }
}
```
- 시간 복잡도: **O(m+n)**
- 공간 복잡도: **O(1)**
