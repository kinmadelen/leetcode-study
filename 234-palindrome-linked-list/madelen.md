# 234. Palindrome Linked List

https://leetcode.com/problems/palindrome-linked-list

## Approach

- slow와 fast 포인터를 사용해서 리스트 가운데 노드를 찾는다.
- 찾는 과정에서 slow를 스택에 하나씩 추가한다.
- 가운데 노드를 찾았으면 `fast` 노드를 second half부터 순회한다.
- 순회하면서 해당 노드가 스택에 쌓인 값들과 대칭이 되는지 확인한다.

## Code

```ts
function isPalindrome(head: ListNode | null): boolean {
  if (!head.next) return true;

  let slow = head;
  let fast = head;
  let cnt = 1;
  let stk: number[] = [head.val];

  while (fast && fast.next) {
    slow = slow.next;
    stk.push(slow.val);
    fast = fast.next;
    ++cnt;

    if (!fast || !fast.next) break;

    fast = fast.next;
    ++cnt;
  }

  stk.pop();
  if ((cnt & 1) === 1) {
    fast = slow.next;
  } else {
    fast = slow;
  }

  while (stk.length > 0) {
    let tp = stk.pop();
    if (tp !== fast.val) return false;
    fast = fast.next;
  }

  return true;
}
```

## Complexity

slow 포인터는 리스트 반 까지 순회했다가, 마지막에 다시 한 번 전부 순회하므로 linear가 된다.

시간복잡도: **O(N)**
