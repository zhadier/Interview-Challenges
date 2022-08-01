/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    let pointer = head;
    const array = [];
    while(pointer.next !==null) {
        if(array.includes(pointer)) {
                return true;
        }
        const temp = pointer;
        array.push(temp);
        pointer = pointer.next;
    }
    return false;
};