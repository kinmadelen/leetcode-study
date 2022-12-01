# 0237. Delete Node in a Linked List

https://leetcode.com/problems/delete-node-in-a-linked-list/

## TypeScript

### Approach
주어진 노드외에는 다른 정보가 없기 때문에 주어진 노드부터 시작한다.

리스트 마지막 노드 전 까지 순회하면서 현재 노드의 값을 다음 노드의 값으로 덮어씌운다.

마지막으로 끝 노드의 링크를 끊어주면된다.

### Code
```ts
function deleteNode(node: ListNode | null): void {
    while(node.next.next) {
        node.val = node.next.val;
        node = node.next;
    }
    
    node.val = node.next.val;
    node.next = null;
};
```

### Complexity
주어진 노드에서부터 마지막까지 순회하기 때문에 **O(N)**이 된다.

공간 복잡도는 **O(1)**