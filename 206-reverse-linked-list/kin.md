# 206. Reverse Linked List

https://leetcode.com/problems/reverse-linked-list/

## Approach

![Page7](https://user-images.githubusercontent.com/48708746/198287623-6eb2807f-857b-4712-bd7e-4653196b1904.png)

## Code

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return
        current = head
        next = head.next
        head.next = None
        while next:
            temp = next
            next = next.next
            temp.next = current
            current = temp
        return current
```

## Complexity
