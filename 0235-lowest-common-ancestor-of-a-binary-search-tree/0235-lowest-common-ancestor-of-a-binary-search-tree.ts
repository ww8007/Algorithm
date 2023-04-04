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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	const search = (node: TreeNode, p: TreeNode, q: TreeNode) => {
        const val = node.val;
    
        if (val < p.val && val < q.val) {
            return search(node.right, p, q);
        }
        if (p.val < val && q.val < val) {
            return search(node.left, p, q);
        }
        
        return node;
    }
    
    return search(root, p, q);
};