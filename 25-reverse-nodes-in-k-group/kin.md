# 25. Reverse Nodes in k Group

https://leetcode.com/problems/reverse-nodes-in-k-group/

## Approach

- k 만큼 그룹을 묶어 해당 그룹의 값들의 순서를 바꾼다.

## problem

- hard 난이도에 겁을 먹어버렸다.

## Code

```python
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if k == 1:
            return head
        node = ListNode()
        dp = []
        result = []

        while head:
            dp.append(head.val)
            head = head.next

        index = 0
        # k 만큼 그룹을 묶는다.
        while index + k <= len(dp):
            temp = dp[index:index+k]
            temp.reverse()
            result += temp
            index = index + k
        result += dp[index:]
        temp = node

        for i in range(len(result)):
            temp.next = ListNode(result[i])
            temp = temp.next
        return node.next


```

## Complexity

linked list를 처음부터 돌아 그룹핑하고 reverse 하므로 시간복잡도는 O(n)
새로운 node에 결과를 담아 반환하므로 공간복잡도 역시 O(n)
