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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const ans = new ListNode();

    let cur = ans;
    let carry = false;
    
    let sum = l1.val + l2.val;
    if (sum > 9) {
        carry = true;
        sum = sum % 10;
    }
    
    cur.val = sum;
    
    while(l1.next || l2.next) {
        l1 = l1.next ?? new ListNode();
        l2 = l2.next ?? new ListNode();
        
        cur.next = new ListNode();
        cur = cur.next;
        
        sum = l1.val + l2.val;
        
        if (carry) {
            sum++;
            carry = false;
        }
        if (sum > 9) {
            carry = true;
            sum = sum % 10;
        }
        cur.val = sum;
    }
    
    if (carry) cur.next = new ListNode(1);
    
    
    return ans;
};

