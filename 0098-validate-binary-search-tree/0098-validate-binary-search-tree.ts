/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    
    const min = Number.MIN_SAFE_INTEGER;
    const max = Number.MAX_SAFE_INTEGER;
    
    let isValid = true;
    
    const search = (node: TreeNode, min: number, max: number) => {
        console.log(node, min, max)
        if (!node) return;
        console.log(node, min, max)
        if (node.val > min && node.val < max) {
            node.left && search(node.left, min, node.val);
            node.right && search(node.right, node.val, max);
        } else {
            isValid = false;
            return;
        }
    }
    
    search(root, min, max);
    
    return isValid;
};