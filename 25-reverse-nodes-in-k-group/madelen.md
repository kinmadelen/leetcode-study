
# 0025. Reverse Nodes in k-Group
https://leetcode.com/problems/reverse-nodes-in-k-group/


## Approach 1 - naive
Naive approach would be 
1. iterate the list and save values to the array
2. read first `k` values in reverse order and create a list from it
3. repeat above step until there are no more than `k` values

the both time and space complexity would be linear, `O(N)`.

### Code
```ts
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let curr = head;
    let nums: number[] = [];
    
    while(curr) {
        nums.push(curr.val);
        curr = curr.next;
    }
    
    let round = 1;
    let low = 0;
    let high = k-1;
    let dummy = new ListNode(0);
    curr = dummy;
  
    while(round*k <= nums.length) {
        for(let i=high; i>=low; --i) {
            curr.next = new ListNode(nums[i]);
            curr = curr.next;
        }
        low = high+1;
        ++round;
        high = k * round - 1;
    }
    
    for(let i=low; i<nums.length; ++i) {
        curr.next = new ListNode(nums[i]);
        curr = curr.next;
    }
    
    return dummy.next;
};
```