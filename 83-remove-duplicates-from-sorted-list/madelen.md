# 83. Remove Duplicates from Sorted List
https://leetcode.com/problems/remove-duplicates-from-sorted-list/

## TypeScript

### Approach
I'm going to use two pointers. One to iterate the node, and the other one to track unique values.

- `p` will track unique nodes and `q` will iterate the list.
- if `p` and `q` values are different, set `p.next.value` to `q` value and move `p` to next node.
- if `p` and `q` share same values, continue iterating with `q`.

### Code
```ts
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let p = head;
    if (!p) return null;
    let q = head.next;

    while(q) {
        if (p.val != q.val) {
            p.next.val = q.val;
            p = p.next;
        }
        q = q.next;
    }

    p.next = null;
    return head;
};
```

### Complexity
The time complexity is linear because `q` is iterating node once and once `q` reaches to `null`, the loop is over.