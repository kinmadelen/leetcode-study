# 141. Linked List Cycle

https://leetcode.com/problems/linked-list-cycle/

## Approach

Linked List가 사이클이 있는지 없는지 확인하는 문제 <br>
사이클을 확인하기 위해 first, second 를 두어 확인한다. <br>

first를 기준으로 first.next.next와 second.next가 같으면 사이클이 형성되어 있다고 본다. (즉, 가장 마지막 노드가 None이 아니라 존재하는 값-여기서는 first와 동일한 값- 일 경우 사이클이 존재한다. )<br>

## Code

```python
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head:
            return False
        if not head.next:
            return False

        first = head
        second = head
        while first is not None and first.next is not None:
            first = first.next.next
            second = second.next
            if first == second:
                return True
        return False

```

## Complexity

list 끝까지 None 유무를 확인하여야하므로 시간복잡도는 O(N)
