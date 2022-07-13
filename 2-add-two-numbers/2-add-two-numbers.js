/**
 * Definition for singly-linked list.
 // 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
    
var addTwoNumbers = function(l1, l2) {
    const sumList = new ListNode();
    let currentNode = sumList;
    let sum = 0;
    let carry = 0;
    while ( true ) {
        if(l1 === null && carry === 0) {
            currentNode.val = l2.val;
             currentNode.next = l2.next;
              break;
        }
        
        if(l2 === null && carry === 0) {
             currentNode.val = l1.val;
             currentNode.next = l1.next;
             break;
        }
        sum = carry + (l1?.val ? l1.val : 0)  + (l2?.val ? l2.val : 0) ;
        l1 = l1?.next ? l1.next : null;
        l2 = l2?.next ? l2.next : null;
        currentNode.val = sum % 10;
        carry = 0;
        if (sum >= 10) {
           carry = 1;
       }   
        if (l1 === null && l2 === null) {
            if (carry > 0) {
                currentNode.next = new ListNode(carry);
            }
            break;
        }
        currentNode.next = new ListNode();
        currentNode = currentNode.next;

    }
    return sumList;
};
