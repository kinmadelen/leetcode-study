# 1290. Convert Binary Number in a Linked List to Integer
https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

## TypeScript

### Approach
Use the doubling technique.
1. start from `x = 0`
2. multiply `x` by 2 and add the bit (either `0` or `1`)

### Code

```ts
function getDecimalValue(head: ListNode | null): number {
    let curr = head;
    let x = 0;

    while(curr) {
        x = x * 2 + curr.val;
        curr = curr.next;
    }

    return x;
};
```

### Complexity
Linear time complexity because we're iterating the list once from head to tail.