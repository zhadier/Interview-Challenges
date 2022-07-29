/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    try {
    let height = 1;
    if(!root || (root?.left === null && root?.right=== null)){
        return height;
    }
    let a = 0, b = 0;
    if(root.left !== null) {
         a = isBalanced(root.left);
    }
    if(root.right !== null) {
         b = isBalanced(root.right);
    }

    if((Math.abs(a-b)) > 1 || a === false || b === false ) {
      throw error;
    }
    height+= Math.max(a, b);
    console.log(height, a, b);
    return height;
        
    } catch (err) {
        return false;
    }
   
};