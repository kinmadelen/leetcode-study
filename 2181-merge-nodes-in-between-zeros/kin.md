# 2181. Merge Nodes in Between Zeros

https://leetcode.com/problems/merge-nodes-in-between-zeros/

## Approach

- Apporach 성공 / Solve myself 실패
- 0으로 둘러쌓인 값들만 계산하는 꼴이므로, 0부터 다음 0을 만날때까지에 대한 분기를 찾는다.

## problem

- 처음 0에서 다음 0까지의 분기를 찾는 Approach는 가능했으나 linked list 를 다루는 것이 아직 잘 되었다.

## Code

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        first = head
        current = head.next
        while current:
            if current.val == 0 and current.next:
                first = first.next
                first.val = 0
            else:
                first.val += current.val

            if current.next:
                current = current.next
            else:
                first.next = None
                break
        return head
```

## Complexity

node를 처음부터 끝까지 current가 null일 때까지 loop하므로 O(n)
