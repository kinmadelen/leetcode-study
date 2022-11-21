# 83. Remove Duplicates from Sorted List

https://leetcode.com/problems/remove-duplicates-from-sorted-list/

## Approach

- head.val 과 head.next 가 같을 경우
- head.val를 head.next.val 로, head.next 를 head.next.next로 앞당겨주면 풀릴 거라고 생각(실패)

- 접근은 맞으나 linked list 를 다루는 데에 있어서는 틀림

## problem

- head.val와 head.next.val가 같은 경우에 대한 조건을 잘못설정
- 아래의 답을 보면-current.next와 current.val 가 current.next.val 와 같은 경우- 라는 조건으로 검사
- 나는 단순히 head.val == head.next 라고 함

## Code

```python
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current = head
        while current:
            if current.next and current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next
        return head
```

## Complexity

본 문제 또한 linked list를 전체 loop 돌기 때문에 O(N)
