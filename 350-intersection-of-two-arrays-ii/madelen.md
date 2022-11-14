# 0350. Intersection of Two Arrays II

https://leetcode.com/problems/intersection-of-two-arrays-ii/

## Approach

입력으로 들어오는 최대 크기의 숫자가 1000이 넘어가지 않기 때문에 크기 1000의 배열을 만들었다.

`nums1` 리스트 숫자들의 빈도를 위 배열에 저장한다.

`nums2` 리스트를 순화하면서 위 배열을 확인하는데, 중복된 숫자도 계속해서 포함시켜야 하기 때문에 숫자가 존재하면(`> 0`) 숫자를 정답 배열에 추가하고 빈도수 카운팅 `-1`을 해준다.

## TypeScript

```ts
function intersect(nums1: number[], nums2: number[]): number[] {
  let arr: number[] = new Array(1001).fill(0);

  for (const x of nums1) {
    arr[x] += 1;
  }

  let ans: number[] = [];
  for (const x of nums2) {
    if (arr[x] > 0) {
      ans.push(x);
      --arr[x];
    }
  }

  return ans;
}
```

### Complexity

시간복잡도는 **O(N + M)**, `N = nums1 길이` & `M = nums2 길이`
