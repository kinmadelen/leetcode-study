# 26. Remove Duplicates from Sorted Array

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

## Approach

- 리스트의 크기로 사용 할 변수를 하나 선언 -> `pos`. `pos`가 리스트의 실제 크기가 된다.
- `nums` 리스트를 순회하면서 두 값 (`[i] != [i-1]`) 이 다를 경우, `pos`위치에 `i`번째 값을 덮어씌운다.

## Code

```ts
function removeDuplicates(nums: number[]): number {
  const SIZE = nums.length;
  let pos = 1;

  for (let i = 1; i < SIZE; ++i) {
    if (nums[i] !== nums[i - 1]) {
      nums[pos] = nums[i];
      ++pos;
    }
  }

  return pos;
}
```

Modified the code to use less space.
```ts
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1) return list2;
    if(!list2) return list1;
    
    let head: ListNode = new ListNode(0);
    let curr = head;
    
    while(list1 && list2) {
        if(list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    
    if(list1) curr.next = list1;
    if(list2) curr.next = list2;
    
    return head.next;
};
```
## Complexity

`nums` 리스트 크기만큼 순회하기 때문에 O(N).
