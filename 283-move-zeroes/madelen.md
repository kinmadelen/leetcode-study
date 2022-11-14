# 0283. Move Zeroes

https://leetcode.com/problems/move-zeroes/

## TypeScript

### Approach

- `0`이 아닌 숫자들을 옮기기 위해 `pos`라는 인덱스 변수를 사용.
- 리스트를 순회하면서 `0`이 아닌 숫자들을 `nums[pos]`에 저장하고 `pos++`해준다.
- 이러면 숫자들의 위치를 그대로 유지하면서 리스트 앞쪽으로 이동시킬 수 있다.
- 나머지 뒷 쪽(`len-pos`)을 `0`으로 채워준다.

### Code

```ts
function moveZeroes(nums: number[]): void {
  let pos = 0;
  const len = nums.length;

  for (let i = 0; i < len; ++i) {
    if (0 !== nums[i]) {
      nums[pos++] = nums[i];
    }
  }

  while (pos < len) {
    nums[pos++] = 0;
  }
}
```

### Complexity

Time complexity: **O(N)**, where `N = nums.length`
