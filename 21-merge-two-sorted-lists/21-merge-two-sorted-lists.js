/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 == null) {
        return list2;
    }
    else if(list2 == null) {
        return list1;
    }
   let currentNode = new ListNode();
    let head = currentNode;
   while (true) {
     if(list1?.val <= list2?.val) {
         currentNode.next = new ListNode(list1.val);
         currentNode = currentNode.next;
         list1=list1.next;
         if(list1 === null ) {
           currentNode.next =list2;  
             break;
        }
     }
     else {
         currentNode.next = new ListNode(list2.val);
         currentNode = currentNode.next;
         list2=list2.next;
         if(list2 === null ) {
           currentNode.next =list1;  
             break;
         }
        }
   }
    return head.next;
};

