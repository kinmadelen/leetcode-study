# 160. Intersection of Two Linked Lists

https://leetcode.com/problems/intersection-of-two-linked-lists/

## Approach

한번의 순회를 통해 A, B 각각 끝 점이 만나는지 확인한다. <br>
두 포인터를 전진시켜 끝에 도달하면 반대쪽 출발지점으로 보내고 교차점(intersection)이 있으면 만나고 없으면 None

ps) `count < 3` 인 이유: 각 포인터가 각 리스트 끝에 도달할 경우2 + 포인터 중 하나라도 끝에 도달하여 intersection이 없는 경우

## Code

```python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        p1, p2 = headA, headB # 각 리스트의 포인터
        count = 0
        while count < 3:
            if p1 is p2:
                return p1
            if p1 and p1.next:
                p1 = p1.next
            else:
                count += 1
                p1 = headB
            if p2 and p2.next:
                p2 = p2.next
            else:
                count += 1
                p2 = headA

```

## Complexity

각 리스트 길이 만큼 움직이므로 시간복잡도는 O(m+n)
