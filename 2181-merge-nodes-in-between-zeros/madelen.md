# 2181. Merge Nodes in Between Zeros

https://leetcode.com/problems/merge-nodes-in-between-zeros/

## TypeScript

### Approach

```text
mergeNode(head) → Node | ø
    Pre: head is a first node of the list
    Post: new list is presented: all nodes between 2 zeroes are merged into a single node

    tempHead ← head
    curr     ← head.next
    sum      ← 0

    WHILE (curr)
        sum  ← sum + curr.value
        curr ← curr.next

        IF curr.value == 0
            tempHead       ← tempHead.next
            tempHead.value ← sum
            tempHead       ← tempHead.next
            tempHead.value ← 0
            sum            ← 0
            curr           ← curr.next
        END IF

        return head
    END WHILE

END mergeNode
```

- 주어진 `head`의 첫 번째 노드는 더미헤드로 사용.
- 리스트를 순회하면서 다음 `0`이 나올때까지 합을 구한다.
- `0`인 경우, 현재까지의 합을 두 번째 노드의 값에 저장하고 두 번째 노드를 가리키도록 `tempHead` 변수를 이동시킨다.
- 위 과정을 반복하고 나면 아래와 같은 값이 연결리스트에 저장 되게된다:
  - 리스트: [0,4,11,0,4,5,2,0] (세 번째(11)에 `tempHead` 있음)
  - 정답 : [4,11]
- 마지막으로 `tempHead.next`에 `null`을 대입해서 링크를 끊어주고, 첫 번째 노드는 더미이기 때문에 `head.next`를 반환하면 제대로 순회하게 된다.

### Code

```ts
function mergeNodes(head: ListNode | null): ListNode | null {
  let tempHead = head;
  let curr = head.next;
  let sum = 0;

  while (curr) {
    sum += curr.val;
    curr = curr.next;

    if (curr.val === 0) {
      tempHead.next.val = sum;
      tempHead = tempHead.next;
      sum = 0;
      curr = curr.next;
    }
  }

  tempHead.next = null;

  return head.next;
}
```

### Complexity

리스트를 한 번 순회하기 때문에 시간 복잡도는 **O(N)**.

기존 리스트를 사용하기 때문에 공간 복잡도는 **O(1)**.
