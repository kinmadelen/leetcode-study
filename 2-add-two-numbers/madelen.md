# 2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/

## TypeScript
### Approach 1 - 실패
```ts

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = l1;
    let prev = l1;

    let carry = false;
    while(l1 && l2) {
        let sum = l1.val + l2.val + +carry;
        carry = sum >= 10;
        l1.val = sum % 10;

        prev = l1;
        l1 = l1.next;
        l2 = l2.next;
    }

    if(carry && l1 === null) {
        prev.next = new ListNode(1);
    } else {
        while(carry && l1) {
            let sum = l1.val + +carry;
            carry = sum >= 10;
            l1.val = sum % 10;
            prev = l1;
            l1 = l1.next;
        }
    }

    if(carry) prev.next = new ListNode(1);

    return head;
};
```

`l1`이 `l2`보다 작은 경우 값이 제대로 안나온다.


### Solution
```ts
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while(l1 || l2 || carry) {
        let x = l1?.val || 0;
        let y = l2?.val || 0;
        let sum = carry + x + y;
        carry = +(sum >= 10);

        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2 .next: null;
    }

    return dummy.next;
};
```

### Complexity
`l1`과 `l2` 전부 끝에 도달 할 때까지 순회하므로 시간/공간 복잡도는 **O(N + M)**이 된다. `N = l1 길이`, `M = l2 길이`