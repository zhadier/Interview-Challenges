/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root){
        return false;
    }
   const a = lowestCommonAncestor(root.left, p ,q);
   const b = lowestCommonAncestor(root.right, p ,q);
    if(a && b) {
        console.log(root?.val, p, q);
        return root;
    }
    if(p.val === root?.val || q.val === root?.val)  {
       if(a || b) {
        return root;
    }
        return true;
    }
    return a ? a : b;
};

