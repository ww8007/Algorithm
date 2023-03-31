/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    const map = new Map();
    let cnt = -1;

    
    while(head) {
        if (map.has(head)) return head;
        map.set(head, cnt++);
        head = head.next;
        
    }
    return null;
};