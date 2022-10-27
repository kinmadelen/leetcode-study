# 141. Linked List Cycle
https://leetcode.com/problems/linked-list-cycle

## Approach
토끼와 거북이 (Floyd's Tortoise and Hare) 알고리즘 사용!

토끼는 두 칸씩, 거북이는 한 칸씩 이동하면서 둘이 교차할 때까지 반복. 
사이클이 존재하면 무조건 언젠가 교차한다.

사이클이 존재하지 않는 경우 반복문 조건에 의해서 둘 중 하나가 `null`이 되어 반복문을 빠져나와 `false`를 반환한다.

## Code
```ts
function hasCycle(head: ListNode | null): boolean {
    if(!head) {
        return false;
    }
    
    let hare = head;
    let tort = head;
    
    while(hare && hare.next && tort) {
        hare = hare.next.next;
        tort = tort.next;
        
        if(tort == hare) {
            return true;
        }
    }
    
    return false;
    
};
```

## Complexity
시간 복잡도는 **O(N)**.

slow pointer (거북이)가 사이클(최대 `N`개의 노드) 한 바퀴 돌기 전에 무조건 fast pointer (토끼)가 거북이를 따라 잡기 때문에 O(N)이 된다고 한다.

참고: https://stackoverflow.com/questions/47193225/runtime-complexity-of-floyds-cycle-detection
