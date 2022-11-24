# 2095. Delete the Middle Node of a Linked List

https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

## TypeScript

### Approach 1

- slow와 fast 포인터를 사용해서 가운데 노드의 위치를 찾았다.
- slow가 가운데 노드에 위치하게 되는데, 여기서 slow를 fast (리스트 끝)까지 순회하면서 현재 값을 다음 값으로 덮어씌운다.
- 마지막 노드를 제외하도록 링크를 끊어주고 `head`를 반환하면 된다.

```ts
function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) return null;
  if (head.next.next === null) {
    // when there are only 2 nodes
    head.next = null;
    return head;
  }

  let t = head;
  let h = head;

  while (h && h.next) {
    t = t.next;
    h = h.next;
    if (h.next) h = h.next;
    else break;
  }

  while (t && t.next) {
    t.val = t.next.val;
    if (t.next === h) {
      t.next = null;
      break;
    }
    t = t.next;
  }

  return head;
}
```

- 시간복잡도는 **O(N)**이 된다.
- 공간복잡도는 **O(1)**.

### Approach 2

- 시작은 처음 방법과 동일하고 두 개의 포인터를 사용하여 가운데 노드를 찾는다. 다만 `slow` 포인터를 가리킬 임시 변수 `prev`를 하나 생성한다.
- 가운데 노드를 찾았으면 `prev`를 사용해서 가운데 노드의 링크를 끊어준다 `prev.next = slow.next`
- 위 방식에서의 두 번째 반복문은 필요없어진다.

```ts
function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) return null;
  if (head.next.next === null) {
    // when there are only 2 nodes
    head.next = null;
    return head;
  }

  let t = head;
  let h = head;
  let prev = null;

  while (h && h.next) {
    prev = t;
    t = t.next;
    h = h.next;
    if (h.next) h = h.next;
    else break;
  }

  prev.next = t.next;

  return head;
}
```

- 시간복잡도와 공간복잡도는 **O(N)**과 **O(1)**으로 동일하지만 실질적으로 첫 번째 방법보다는 두 번째 방법이 적은 비용이 들게된다.
