# 234. Palindrome Linekd List

https://leetcode.com/problems/palindrome-linked-list/

## Approach

Runner를 이용한 풀이.
slow, fast 초기값을 모두 head에서 시작한다.<br>
빠른 러너(fast)는 두칸씩, 느린 러너(slow)는 한칸씩 이동한다. <br>
revert에 현재 slow, revert.next에 이전 revert를 넣어 역순으로 만든다.<br>
slow는 정방향으로 한칸씩 이동하도록한다. 한칸씩 이동할 때 마다 느린러너의 역순 연결리스트를 만든다. <br>
반복문이 끝나면 새로운 반복문을 통해 역순 연결리스트의 값과 느린 연결리스트의 값이 동일한지 비교한다.

## Code

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        revert = None
        slow = head
        fast = head

        while fast and fast.next:
            fast = fast.next.next
            revert, revert.next, slow = slow, revert, slow.next

        if fast:
            slow = slow.next

        while revert and revert.val == slow.val:
            slow, revert = slow.next, revert.next
        return not revert
```

## Complexity

fast가 한바퀴는 돌게 되므로 O(N)
