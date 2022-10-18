# 20. Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists/

## Approach

- 두개의 노드를 비교하여 더 작은 노드는 새로 합칠 노드에 넣고, 더 큰 노드를 다음 노드로 mergeTwoLists 함수의 인자값으로 보내어 또 다시 다음 노드와 비교하도록 한다.
- 본 과정을 재귀로 구현한다.

## Code

```cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
      // null pointer literal
      // ** null은 값이기 때문에 NULL 보다는 nullptr을 사용하는게 더 정확하기 때문에 권장
      if(list1 == nullptr) return list2;
      if(list2 == nullptr) return list1;

      // 재귀를 통한 구현
      if(list1->val <= list2->val) {
        // 더 큰 값을 다음 Node로 넘긴다.
        ListNode* nextNode = mergeTwoLists(list1->next, list2);
        list1->next = nextNode;
        return list1;
      }else {
        ListNode* nextNode = mergeTwoLists(list1, list2->next);
        list2->next = nextNode;
        return list2;
      }
    }
};

```

## Complexity

(불확실..)

- 다음 노드를 알기 위해 두 개의 노드를 비교대조 <br>
- 2번씩 노드(트리) 깊이N 만큼 반복 <br>
- 따라서 O(2^N)
