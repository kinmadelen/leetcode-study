# 160. Intersection of Two Linked Lists

https://leetcode.com/problems/intersection-of-two-linked-lists/

## Approach

- `listA`를 끝까지 순회하면서 각 노드의 정보를 해시맵에 저장한다.
- `listB`를 순회하면서 해당 노드가 해시맙에 존재하는지 확인.
  - 존재하면 해당 노드를 반환
  - 마지막까지 동일한 노드가 없으면 `null`을 반환

```text
getIntersectionNode(headA, headB, map) → Node
    Pre: headA is the head node of the list A
         headB is the head node of the list B
         map is a hash map used to check whether certain nodes are already visited or not
    Post: true is returned if intersection exists; otherwise false

    IF headA == ø OR headB == ø
        RETURN ø
    END IF

    WHILE headA
        map.INSERT(headA)
        headA ← headA.next
    END WHILE

    WHILE headB
        IF map.find(headB) IS NOT EQ map.END
            RETURN headB
        END IF
        headB ← headB.next
    END WHILE

    RETURN ø
END
```

## Code

```ts
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) {
    return null;
  }

  let mp = new Map<ListNode, number>();

  while (headA) {
    mp.set(headA, 1);
    headA = headA.next;
  }

  while (headB) {
    if (mp.get(headB)) return headB;
    headB = headB.next;
  }

  return null;
}
```

## Complexity

- Time complexity: $O(N+M)$, `N = listA.length` and `M = listB.length.`
- Space complexity: $O(N+M)$, `N = listA.length` and `M = listB.length`
